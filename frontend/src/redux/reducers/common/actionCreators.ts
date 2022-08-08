import {
  CommonActionEnum,
  SetIsBackButtonAction,
  SetCurrentPageAction,
} from 'redux/reducers/common/types'

const commonActionCreators = {
  setIsBackButton: (isBackButton: boolean): SetIsBackButtonAction => ({
    type: CommonActionEnum.SET_IS_BACK_BUTTON,
    payload: isBackButton,
  }),
  setCurrentPage: (currentPage: number): SetCurrentPageAction => ({
    type: CommonActionEnum.SET_CURRENT_PAGE,
    payload: currentPage,
  }),
}

export default commonActionCreators
