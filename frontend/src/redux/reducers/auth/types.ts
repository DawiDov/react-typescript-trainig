export interface AuthState {
  isAuth: boolean
  isLoading: boolean
  error: string
}

/* eslint-disable */
export enum AuthActionEnum {
  SET_AUTH = 'SET-AUTH',
  SET_IS_LOADING = 'SET-IS-LOADING',
  SET_ERROR = 'SET-ERROR',
}
/* eslint-enable */

export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH
  payload: boolean
}

export interface SetIsLoadingAction {
  type: AuthActionEnum.SET_IS_LOADING
  payload: boolean
}

export interface SetErrorAction {
  type: AuthActionEnum.SET_ERROR
  payload: string
}

export type AuthActions = SetAuthAction | SetIsLoadingAction | SetErrorAction
