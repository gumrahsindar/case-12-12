import { useAuthStore } from '~/store/authStore'
import { storeToRefs } from 'pinia'

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/signup') return

  const authStore = useAuthStore()
  const { user } = storeToRefs(authStore)

  if (!user.value.isLoggedIn) {
    return navigateTo('/signup')
  }
})
