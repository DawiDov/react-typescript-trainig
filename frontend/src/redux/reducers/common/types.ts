export interface TypeCommonState {
  isBackButton: boolean
  currentPage: number
}

/* eslint-disable */
export enum CommonActionEnum {
  SET_IS_BACK_BUTTON = 'SET-IS-BACK-BUTTON',
  SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
}
/* eslint-enable */

export interface SetIsBackButtonAction {
  type: CommonActionEnum.SET_IS_BACK_BUTTON
  payload: boolean
}

export interface SetCurrentPageAction {
  type: CommonActionEnum.SET_CURRENT_PAGE
  payload: number
}

export type CommonActions = SetIsBackButtonAction | SetCurrentPageAction
