import { computed } from 'vue'
import type {
  PublicLocaleCode,
  RallyTechLocaleMessages,
  SiteLocaleCode
} from '../../i18n/locales/types'

export const siteLocaleCodes = ['zh-tw', 'en', 'source'] as const
export const publicLocaleCodes = ['zh-tw', 'en'] as const

export function isPublicLocaleCode(code: string): code is PublicLocaleCode {
  return publicLocaleCodes.includes(code as PublicLocaleCode)
}

export function useRallyMessages() {
  const { getLocaleMessage, locale } = useI18n()

  return computed(
    () =>
      getLocaleMessage(
        locale.value as SiteLocaleCode
      ) as RallyTechLocaleMessages
  )
}
