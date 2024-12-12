export type TCat = {
  breeds: string[]
  id: string
  url: string
  width: number
  height: number
}

export type TUser = {
  username: string
  email: string
  password: string
  isLoggedIn: boolean
}

export type TSignupForm = Omit<TUser, 'isLoggedIn'>
