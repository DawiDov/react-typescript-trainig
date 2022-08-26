import {
  TypeBonusState,
  BonusActions,
  BonusActionEnum,
} from 'redux/reducers/bonus/types'

const initialState = {
  bonusContent: null,
}

const bonusReducer = (
  state: TypeBonusState = initialState, // eslint-disable-line
  action: BonusActions,
): TypeBonusState => {
  switch (action.type) {
    case BonusActionEnum.SET_BONUS:
      return {
        ...state,
        bonusContent: action.payload,
      }
    default:
      return state
  }
}

export default bonusReducer
