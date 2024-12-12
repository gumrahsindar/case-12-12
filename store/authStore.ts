import type { TUser, TSignupForm } from '~/lib/types'

export const useAuthStore = defineStore('authStore', () => {
  const router = useRouter()
  const user = reactive<TUser>({
    username: '',
    email: '',
    password: '',
    isLoggedIn: false,
  })

  const signup = (credentials: TSignupForm) => {
    user.username = credentials.username
    user.email = credentials.email
    user.isLoggedIn = true

    console.log('User signed up:', user)
  }

  const logout = () => {
    user.isLoggedIn = false
    router.push('/signup')
  }

  return {
    user,
    signup,
    logout,
  }
})
