import axios from 'axios'
import {
  BonusActionEnum,
  SetBonusAction,
  TypeBonus,
} from 'redux/reducers/bonus/types'

import { AppDispatch } from 'redux/store'
import authTokenHandler from 'redux/reducers/auth/authStorage'

const bonusActionCreators = {
  setBonusContent: (bonusContent: TypeBonus): SetBonusAction => ({
    type: BonusActionEnum.SET_BONUS,
    payload: bonusContent,
  }),
  getBonusContent: (id: number) => async (dispatch: AppDispatch) => {
    const token: string | null = authTokenHandler.getToken()
    const url: string = `https://masterskaya-courses.ru/api/bonus?id=${id}`

    const requestHeaders = {
      'Authorization': `Token ${token}`, // eslint-disable-line
      'Content-Type': 'application/json',
    }
    try {
      const resp = await axios.get(url, { headers: requestHeaders })
      dispatch(bonusActionCreators.setBonusContent(resp.data.results[0]))
    } catch (e) {
      console.log(e) //eslint-disable-line
    }
  },
}

export default bonusActionCreators
