import type { DirectiveBinding } from 'vue'
import type { gsap as GsapNamespace } from 'gsap'
import type { ScrollTrigger as ScrollTriggerNamespace } from 'gsap/ScrollTrigger'

export type MotionRevealPreset =
  | 'fade-up'
  | 'fade-left'
  | 'fade-right'
  | 'scale-soft'
  | 'line'

export type MotionMobileMode = 'same' | 'reduced' | 'off'

export interface MotionRevealOptions {
  preset?: MotionRevealPreset
  distance?: number
  duration?: number
  delay?: number
  ease?: string
  start?: string
  once?: boolean
  mobile?: MotionMobileMode
}

export interface MotionGroupOptions extends MotionRevealOptions {
  children?: string
  stagger?: number
  from?: 'start' | 'center' | 'end'
}

export interface MotionParallaxOptions {
  y?: number
  yPercent?: number
  scale?: number
  opacity?: number
  scrub?: number | boolean
  start?: string
  end?: string
  desktopOnly?: boolean
  tabletScale?: number
  mobile?: MotionMobileMode
}

type Gsap = typeof GsapNamespace
type ScrollTriggerPlugin = typeof ScrollTriggerNamespace

type MotionCleanup = () => void

interface MotionRuntime {
  gsap: Gsap
  ScrollTrigger: ScrollTriggerPlugin
}

interface RevealTransformVars {
  x: number
  y: number
  scale: number
}

const cleanupByElement = new WeakMap<HTMLElement, MotionCleanup>()
const signatureByElement = new WeakMap<HTMLElement, string>()

const DEFAULT_REVEAL: Required<MotionRevealOptions> = {
  preset: 'fade-up',
  distance: 28,
  duration: 0.78,
  delay: 0,
  ease: 'power3.out',
  start: 'top 84%',
  once: true,
  mobile: 'reduced'
}

const DEFAULT_GROUP: Required<MotionGroupOptions> = {
  ...DEFAULT_REVEAL,
  children: ':scope > *',
  stagger: 0.09,
  from: 'start'
}

const DEFAULT_PARALLAX: Required<MotionParallaxOptions> = {
  y: 0,
  yPercent: 10,
  scale: 1,
  opacity: 1,
  scrub: 0.8,
  start: 'top bottom',
  end: 'bottom top',
  desktopOnly: false,
  tabletScale: 0.5,
  mobile: 'off'
}

export function createMotionDirectives(runtime: MotionRuntime) {
  return {
    reveal: createMotionDirective(runtime, setupReveal),
    group: createMotionDirective(runtime, setupGroup),
    parallax: createMotionDirective(runtime, setupParallax)
  }
}

function createMotionDirective<T>(
  runtime: MotionRuntime,
  setup: (el: HTMLElement, value: T | undefined, runtime: MotionRuntime) => void
) {
  return {
    mounted(el: HTMLElement, binding: DirectiveBinding<T>) {
      setupDirective(el, binding.value, runtime, setup)
    },
    updated(el: HTMLElement, binding: DirectiveBinding<T>) {
      setupDirective(el, binding.value, runtime, setup)
    },
    unmounted(el: HTMLElement) {
      cleanupElement(el)
    }
  }
}

function setupDirective<T>(
  el: HTMLElement,
  value: T | undefined,
  runtime: MotionRuntime,
  setup: (el: HTMLElement, value: T | undefined, runtime: MotionRuntime) => void
) {
  const signature = JSON.stringify(value ?? {})

  if (signatureByElement.get(el) === signature) {
    return
  }

  cleanupElement(el)
  signatureByElement.set(el, signature)

  if (isMotionRouteDisabled()) {
    runtime.gsap.set(el, {
      autoAlpha: 1,
      clearProps: 'transform,opacity,visibility'
    })
    return
  }

  setup(el, value, runtime)
}

function setupReveal(
  el: HTMLElement,
  value: MotionRevealOptions | undefined,
  { gsap }: MotionRuntime
) {
  const options = { ...DEFAULT_REVEAL, ...(value ?? {}) }
  const mm = gsap.matchMedia()

  mm.add(motionConditions(), (context) => {
    const { isMobile, reduceMotion } = context.conditions ?? {}
    const vars = getRevealVars(options, Boolean(isMobile))

    if (reduceMotion || options.mobile === 'off') {
      gsap.set(el, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        clearProps: 'transform,opacity,visibility'
      })
      return
    }

    gsap.fromTo(el, vars.from, {
      ...vars.to,
      delay: options.delay,
      duration: options.duration,
      ease: options.ease,
      scrollTrigger: {
        trigger: el,
        start: options.start,
        once: options.once,
        toggleActions: options.once
          ? 'play none none none'
          : 'play none none reverse'
      }
    })
  })

  cleanupByElement.set(el, () => mm.revert())
}

function setupGroup(
  el: HTMLElement,
  value: MotionGroupOptions | undefined,
  { gsap }: MotionRuntime
) {
  const options = { ...DEFAULT_GROUP, ...(value ?? {}) }
  const mm = gsap.matchMedia()

  mm.add(motionConditions(), (context) => {
    const { isMobile, reduceMotion } = context.conditions ?? {}
    const targets = getGroupTargets(el, options.children)
    const vars = getRevealVars(options, Boolean(isMobile))

    if (!targets.length) {
      return
    }

    if (reduceMotion || options.mobile === 'off') {
      gsap.set(targets, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        clearProps: 'transform,opacity,visibility'
      })
      return
    }

    gsap.fromTo(targets, vars.from, {
      ...vars.to,
      duration: options.duration,
      ease: options.ease,
      stagger: {
        each: options.stagger,
        from: options.from
      },
      scrollTrigger: {
        trigger: el,
        start: options.start,
        once: options.once,
        toggleActions: options.once
          ? 'play none none none'
          : 'play none none reverse'
      }
    })
  })

  cleanupByElement.set(el, () => mm.revert())
}

function setupParallax(
  el: HTMLElement,
  value: MotionParallaxOptions | undefined,
  { gsap }: MotionRuntime
) {
  const options = { ...DEFAULT_PARALLAX, ...(value ?? {}) }
  const mm = gsap.matchMedia()

  mm.add(motionConditions(), (context) => {
    const { isDesktop, isTablet, isMobile, reduceMotion } =
      context.conditions ?? {}

    if (
      reduceMotion ||
      (options.desktopOnly && !isDesktop) ||
      (isMobile && options.mobile === 'off')
    ) {
      gsap.set(el, {
        autoAlpha: 1,
        clearProps: 'transform,opacity,visibility'
      })
      return
    }

    const scaleFactor = isTablet ? options.tabletScale : 1
    const y = options.y * scaleFactor
    const yPercent = options.yPercent * scaleFactor

    gsap.to(el, {
      y,
      yPercent,
      scale: options.scale,
      opacity: options.opacity,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: options.start,
        end: options.end,
        scrub: options.scrub,
        invalidateOnRefresh: true
      }
    })
  })

  cleanupByElement.set(el, () => mm.revert())
}

function getRevealVars(
  options: Required<MotionRevealOptions>,
  isMobile: boolean
) {
  const distance =
    isMobile && options.mobile === 'reduced'
      ? options.distance * 0.55
      : options.distance

  if (options.preset === 'fade-left') {
    return revealVars({ x: distance, y: 0, scale: 1 })
  }

  if (options.preset === 'fade-right') {
    return revealVars({ x: -distance, y: 0, scale: 1 })
  }

  if (options.preset === 'scale-soft') {
    return revealVars({ x: 0, y: distance * 0.45, scale: 0.94 })
  }

  if (options.preset === 'line') {
    return revealVars({ x: 0, y: 0, scale: 0.88 })
  }

  return revealVars({ x: 0, y: distance, scale: 1 })
}

function revealVars(vars: RevealTransformVars) {
  return {
    from: {
      autoAlpha: 0,
      x: vars.x,
      y: vars.y,
      scale: vars.scale
    },
    to: {
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
      clearProps: 'transform,opacity,visibility'
    }
  }
}

function getGroupTargets(el: HTMLElement, selector: string) {
  if (selector === ':scope > *') {
    return Array.from(el.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement
    )
  }

  return Array.from(el.querySelectorAll<HTMLElement>(selector))
}

function cleanupElement(el: HTMLElement) {
  cleanupByElement.get(el)?.()
  cleanupByElement.delete(el)
}

function motionConditions() {
  return {
    isDesktop: '(min-width: 1024px)',
    isTablet: '(min-width: 768px) and (max-width: 1023px)',
    isMobile: '(max-width: 767px)',
    reduceMotion: '(prefers-reduced-motion: reduce)'
  }
}

function isMotionRouteDisabled() {
  const path = window.location.pathname

  return (
    path === '/design-system' ||
    path === '/design-system-color-lab' ||
    path.startsWith('/source')
  )
}
