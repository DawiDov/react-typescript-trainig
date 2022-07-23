import {
  AuthState,
  AuthActionEnum,
  AuthAction,
} from 'redux/reducers/auth/types'

const initialState: AuthState = {
  isAuth: false,
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {  // eslint-disable-line
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
