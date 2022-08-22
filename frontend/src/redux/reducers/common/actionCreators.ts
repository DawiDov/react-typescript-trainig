import {
  CommonActionEnum,
  SetIsBackButtonAction,
} from 'redux/reducers/common/types'

const commonActionCreators = {
  setIsBackButton: (isBackButton: boolean): SetIsBackButtonAction => ({
    type: CommonActionEnum.SET_IS_BACK_BUTTON,
    payload: isBackButton,
  }),
}

export default commonActionCreators
