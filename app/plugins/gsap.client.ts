import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { createMotionDirectives } from '~/utils/motion/gsap'

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)

  const directives = createMotionDirectives({ gsap, ScrollTrigger })

  nuxtApp.vueApp.directive('motion-reveal', directives.reveal)
  nuxtApp.vueApp.directive('motion-group', directives.group)
  nuxtApp.vueApp.directive('motion-parallax', directives.parallax)

  nuxtApp.hook('page:finish', () => {
    window.requestAnimationFrame(() => ScrollTrigger.refresh())
  })
})
