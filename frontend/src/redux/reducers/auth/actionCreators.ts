import axios from 'utils/axios'

import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
} from 'redux/reducers/auth/types'
import { AppDispatch } from 'redux/store'

const authActionCreators = {
  setIsAuth: (isAuth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: isAuth,
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
      const url: string = 'api-token-auth/'

      try {
        dispatch(authActionCreators.setIsLoading(true))
        const resp = await axios.post(url, { username, password })
        localStorage.setItem('username', username)
        localStorage.setItem('token', resp.data.token)
        dispatch(authActionCreators.setIsAuth(true))
      } catch (e) {
        dispatch(authActionCreators.setError('Ошибка авторизации'))
      }
      dispatch(authActionCreators.setIsLoading(false))
    },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      localStorage.removeItem('username')
      localStorage.removeItem('token')
      dispatch(authActionCreators.setIsAuth(false))
    } catch (e) {
      console.log(e) // eslint-disable-line
    }
  },
}

export default authActionCreators
