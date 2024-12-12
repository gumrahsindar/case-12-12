export default defineNuxtPlugin((nuxtApp) => {
  try {
    nuxtApp.vueApp.directive('autoFocus', {
      mounted(el) {
        el.focus()
      },
    })
  } catch (e) {
    console.error('Error in plugin autoFocus:', e)
  }
})
