import {
  CommonActionEnum,
  CommonActions,
  TypeCommonState,
} from 'redux/reducers/common/types'

const initialState = {
  isBackButton: false,
  currentPage: 1,
}

const commonReducer = (
  state: TypeCommonState = initialState, // eslint-disable-line
  action: CommonActions,
): TypeCommonState => {
  switch (action.type) {
    case CommonActionEnum.SET_IS_BACK_BUTTON:
      return {
        ...state,
        isBackButton: action.payload,
      }
    case CommonActionEnum.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    default:
      return state
  }
}

export default commonReducer
