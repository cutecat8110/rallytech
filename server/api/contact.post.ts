import type { H3Event } from 'h3'

type ContactRequestBody = {
  name?: unknown
  company?: unknown
  email?: unknown
  subject?: unknown
  phone?: unknown
  details?: unknown
  locale?: unknown
  turnstileToken?: unknown
}

type ContactPayload = {
  name: string
  company: string
  email: string
  subject: string
  phone: string
  details: string
  locale: string
  turnstileToken: string
}

type TurnstileVerifyResponse = {
  success?: boolean
  action?: string
} & Partial<Record<'challenge_ts' | 'hostname' | 'cdata', string>> &
  Partial<Record<'error-codes', string[]>>

type GraphTokenResponse = {
  access_token?: string
  token_type?: string
  expires_in?: number
}

type RateLimitEntry = {
  resetAt: number
  count: number
}

const MAX_BODY_BYTES = 16 * 1024
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 3
const rateLimitEntries = new Map<string, RateLimitEntry>()

export default defineEventHandler(async (event) => {
  const requestId = crypto.randomUUID()
  const clientIp = getClientIp(event)

  assertBodySize(event)
  assertRateLimit(clientIp)

  const payload = validateContactPayload(
    await readBody<ContactRequestBody>(event)
  )
  const config = useRuntimeConfig(event)
  const contactMail = config.contactMail

  assertServerConfig(
    config.turnstileSecretKey,
    contactMail.graphTenantId,
    contactMail.graphClientId,
    contactMail.graphClientSecret,
    contactMail.graphSenderMailbox,
    contactMail.recipient
  )

  const turnstileResult = await verifyTurnstileToken({
    token: payload.turnstileToken,
    secret: config.turnstileSecretKey,
    remoteIp: clientIp,
    requestId
  })

  if (!turnstileResult.success || turnstileResult.action !== 'contact_form') {
    console.warn('contact_form_turnstile_failed', {
      requestId,
      action: turnstileResult.action,
      errors: turnstileResult['error-codes']
    })

    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'verification_failed'
    })
  }

  const accessToken = await requestGraphAccessToken({
    tenantId: contactMail.graphTenantId,
    clientId: contactMail.graphClientId,
    clientSecret: contactMail.graphClientSecret,
    requestId
  })

  await sendContactMail({
    accessToken,
    senderMailbox: contactMail.graphSenderMailbox,
    recipient: contactMail.recipient,
    payload,
    requestId
  })

  return { ok: true }
})

function assertBodySize(event: H3Event) {
  const contentLength = Number(getRequestHeader(event, 'content-length'))

  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'request_too_large'
    })
  }
}

function assertRateLimit(clientIp: string) {
  const now = Date.now()
  const entry = rateLimitEntries.get(clientIp)

  if (!entry || entry.resetAt <= now) {
    rateLimitEntries.set(clientIp, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS
    })
    return
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too Many Requests',
      message: 'rate_limited'
    })
  }

  entry.count += 1
}

function validateContactPayload(body: ContactRequestBody): ContactPayload {
  const payload = {
    name: normalizeRequiredString(body.name, 'name', 120),
    company: normalizeRequiredString(body.company, 'company', 160),
    email: normalizeEmail(body.email),
    subject: normalizeRequiredString(body.subject, 'subject', 180),
    phone: normalizeOptionalString(body.phone, 40),
    details: normalizeRequiredString(body.details, 'details', 3000),
    locale: normalizeOptionalString(body.locale, 16) || 'zh-tw',
    turnstileToken: normalizeRequiredString(
      body.turnstileToken,
      'turnstileToken',
      2048
    )
  }

  return payload
}

function normalizeRequiredString(
  value: unknown,
  field: string,
  maxLength: number
) {
  const normalized = normalizeOptionalString(value, maxLength)

  if (!normalized) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: `missing_${field}`
    })
  }

  return normalized
}

function normalizeOptionalString(value: unknown, maxLength: number) {
  if (value === undefined || value === null) {
    return ''
  }

  if (typeof value !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'invalid_payload'
    })
  }

  const normalized = value.trim()

  if (normalized.length > maxLength) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'field_too_long'
    })
  }

  return normalized
}

function normalizeEmail(value: unknown) {
  const email = normalizeRequiredString(value, 'email', 254)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'invalid_email'
    })
  }

  return email
}

function assertServerConfig(...values: string[]) {
  if (values.some((value) => !value)) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Service Unavailable',
      message: 'contact_mail_not_configured'
    })
  }
}

async function verifyTurnstileToken(input: {
  token: string
  secret: string
  remoteIp: string
  requestId: string
}) {
  try {
    return await $fetch<TurnstileVerifyResponse>(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body: {
          secret: input.secret,
          response: input.token,
          remoteip: input.remoteIp,
          idempotency_key: input.requestId
        },
        timeout: 10000
      }
    )
  } catch (error) {
    console.warn('contact_form_turnstile_error', {
      requestId: input.requestId,
      error: getProviderErrorStatus(error)
    })

    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'verification_failed'
    })
  }
}

async function requestGraphAccessToken(input: {
  tenantId: string
  clientId: string
  clientSecret: string
  requestId: string
}) {
  try {
    const response = await $fetch<GraphTokenResponse>(
      `https://login.microsoftonline.com/${encodeURIComponent(input.tenantId)}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          client_id: input.clientId,
          client_secret: input.clientSecret,
          scope: 'https://graph.microsoft.com/.default',
          grant_type: 'client_credentials'
        }).toString(),
        timeout: 10000
      }
    )

    if (!response.access_token) {
      throw new Error('missing_access_token')
    }

    return response.access_token
  } catch (error) {
    console.warn('contact_form_graph_token_failed', {
      requestId: input.requestId,
      error: getProviderErrorStatus(error)
    })

    throw createError({
      statusCode: 502,
      statusMessage: 'Bad Gateway',
      message: 'mail_provider_failed'
    })
  }
}

async function sendContactMail(input: {
  accessToken: string
  senderMailbox: string
  recipient: string
  payload: ContactPayload
  requestId: string
}) {
  try {
    await $fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(input.senderMailbox)}/sendMail`,
      {
        method: 'POST',
        headers: {
          authorization: `Bearer ${input.accessToken}`
        },
        body: {
          message: {
            subject: formatMailSubject(input.payload),
            body: {
              contentType: 'HTML',
              content: formatMailBody(input.payload)
            },
            toRecipients: [
              {
                emailAddress: {
                  address: input.recipient
                }
              }
            ],
            replyTo: [
              {
                emailAddress: {
                  address: input.payload.email,
                  name: input.payload.name
                }
              }
            ]
          },
          saveToSentItems: true
        },
        timeout: 10000
      }
    )
  } catch (error) {
    console.warn('contact_form_graph_send_failed', {
      requestId: input.requestId,
      error: getProviderErrorStatus(error)
    })

    throw createError({
      statusCode: 502,
      statusMessage: 'Bad Gateway',
      message: 'mail_provider_failed'
    })
  }
}

function formatMailSubject(payload: ContactPayload) {
  return `[RallyTech 官網洽詢] ${payload.subject} - ${payload.company}`
}

function formatMailBody(payload: ContactPayload) {
  const rows: Array<[string, string]> = [
    ['送出時間', formatTaipeiSubmittedAt()],
    ['姓名', payload.name],
    ['公司 / 單位', payload.company],
    ['Email', payload.email],
    ['聯絡電話', payload.phone || '未提供'],
    ['主旨', payload.subject],
    ['語系', translateLocale(payload.locale)],
    ['需求內容', payload.details]
  ]

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <th style="width: 160px; padding: 12px 14px; border: 1px solid #d4d4d8; background: #f4f4f5; color: #18181b; font-weight: 600; text-align: left; vertical-align: top;">${escapeHtml(label)}</th>
          <td style="padding: 12px 14px; border: 1px solid #d4d4d8; color: #27272a; line-height: 1.7; vertical-align: top;">${formatMailTableCell(value)}</td>
        </tr>`
    )
    .join('')

  return `<!doctype html>
<html lang="zh-Hant">
  <body style="margin: 0; padding: 24px; background: #ffffff; color: #18181b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', 'Microsoft JhengHei', sans-serif;">
    <h1 style="margin: 0 0 18px; color: #18181b; font-size: 20px; line-height: 1.4; font-weight: 700;">RallyTech 官網聯絡表單送出通知</h1>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 760px; border-collapse: collapse; border: 1px solid #d4d4d8; background: #ffffff; font-size: 14px;">
      <tbody>${tableRows}</tbody>
    </table>
  </body>
</html>`
}

function formatTaipeiSubmittedAt(date = new Date()) {
  const parts = new Intl.DateTimeFormat('zh-TW', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).formatToParts(date)

  const values = Object.fromEntries(
    parts.map((part) => [part.type, part.value])
  )

  return `${values.year}年${values.month}月${values.day}日 ${values.hour}:${values.minute}:${values.second}（UTC+8）`
}

function translateLocale(locale: string) {
  const localeMap: Record<string, string> = {}
  localeMap['zh-tw'] = '繁體中文'
  localeMap.en = '英文'
  localeMap.source = '來源參考'

  return localeMap[locale.toLowerCase()] || locale
}

function formatMailTableCell(value: string) {
  return escapeHtml(value.trim()).replace(/\r?\n/g, '<br>')
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function getClientIp(event: H3Event) {
  return (
    getRequestHeader(event, 'cf-connecting-ip') ||
    getRequestHeader(event, 'x-real-ip') ||
    getRequestHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim() ||
    event.node.req.socket.remoteAddress ||
    'unknown'
  )
}

function getProviderErrorStatus(error: unknown) {
  if (typeof error === 'object' && error !== null && 'statusCode' in error) {
    return String(error.statusCode)
  }

  if (error instanceof Error) {
    return error.name
  }

  return 'unknown'
}
