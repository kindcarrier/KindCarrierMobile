import UserData from 'Types/user'

export const SIGNUP_USER = 'USER/SIGNUP'
export const LOGIN_USER = 'USER/LOGIN_USER'
export const SIGNOUT_USER = 'USER/SIGNOUT'

export function setUserAfterSignUp (user: UserData) {
  return {
    type: SIGNUP_USER,
    payload: user,
  }
}

export function setUserAfterLogIn (user: UserData) {
  return {
    type: LOGIN_USER,
    payload: user,
  }
}

export function signOut () {
  return {
    type: SIGNOUT_USER,
  }
}
