import UserData from 'Types/user'

import {
  SIGNUP_USER,
  LOGIN_USER,
  UPDATE_USER,
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
    case LOGIN_USER:
      return { ...state, user: action.payload, isLogined: true }
    case UPDATE_USER:
      return { ...state, user: { ...state.user, ...action.payload } }
    case SIGNOUT_USER:
      return { ...initialState }

    default:
      return state
  }
}
