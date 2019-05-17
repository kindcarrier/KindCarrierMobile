import UserData from 'Types/user'

import {
  SIGNUP_USER,
  SIGNIN_USER,
  SIGNOUT_USER,
} from './actions'

export interface UserReducerState {
  isLogined: boolean,
  user: UserData | null,
}

const initialState = {
  isLogined: false,
  user: null,
}

export default (state: UserReducerState = initialState, action: any): UserReducerState => {
  switch (action.type) {
    case SIGNUP_USER:
    case SIGNIN_USER:
      return { ...state, user: action.payload, isLogined: true }
      case SIGNOUT_USER:
      return { ...initialState }

    default:
      return state
  }
}
