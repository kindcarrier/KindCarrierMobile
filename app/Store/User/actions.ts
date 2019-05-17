import UserData from 'Types/user'

export const SIGNUP_USER = 'USER/SIGNUP'
export const SIGNIN_USER = 'USER/SIGNIN'
export const SIGNOUT_USER = 'USER/SIGNOUT'

export function setUserAfterSignUp (user: UserData) {
  return {
    type: SIGNUP_USER,
    payload: user,
  }
}

export function setUserAfterSignIn (user: UserData) {
  return {
    type: SIGNIN_USER,
    payload: user,
  }
}

export function signOut () {
  return {
    type: SIGNOUT_USER,
  }
}
