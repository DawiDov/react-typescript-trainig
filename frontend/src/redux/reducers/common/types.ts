export interface TypeCommonState {
  isBackButton: boolean
}

/* eslint-disable */
export enum CommonActionEnum {
  SET_IS_BACK_BUTTON = 'SET-IS-BACK-BUTTON',
}
/* eslint-enable */

export interface SetIsBackButtonAction {
  type: CommonActionEnum.SET_IS_BACK_BUTTON
  payload: boolean
}

export type CommonActions = SetIsBackButtonAction
