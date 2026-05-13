import type { ObjectDirective } from 'vue'

const motionSsrDirective: ObjectDirective = {
  getSSRProps() {
    return {}
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  if (!import.meta.server) {
    return
  }

  nuxtApp.vueApp.directive('motion-reveal', motionSsrDirective)
  nuxtApp.vueApp.directive('motion-group', motionSsrDirective)
  nuxtApp.vueApp.directive('motion-parallax', motionSsrDirective)
})
