import {
  AuthState,
  AuthActionEnum,
  AuthActions,
} from 'redux/reducers/auth/types'

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: '',
}

const authReducer = (state = initialState, action: AuthActions): AuthState => {  // eslint-disable-line
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      }
    case AuthActionEnum.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case AuthActionEnum.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}

export default authReducer
