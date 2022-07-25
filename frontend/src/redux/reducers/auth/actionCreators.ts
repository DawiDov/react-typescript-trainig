import axios from 'axios'
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from 'redux/reducers/auth/types'
import { AppDispatch } from 'redux/store'

const authActionCreators = {
  setIsAuth: (isAuth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: isAuth,
  }),
  setUser: (user: string): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      const url: string = 'http://localhost/api-token-auth/'
      try {
        dispatch(authActionCreators.setIsLoading(true))
        const response = await axios.post(url, { username, password })
        console.log(response)
      } catch (e) {
        dispatch(authActionCreators.setError('Произошда ошибка при логине'))
      }
    },
}

export default authActionCreators
