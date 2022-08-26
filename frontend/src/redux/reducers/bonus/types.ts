import { TypeArticles } from 'redux/reducers/articles/types'

export interface TypeBonus {
  article_id: TypeArticles | null
  title: string
  text_bonus: string
  pdf: string | null
  meditation: string | null
}

export interface TypeBonusState {
  bonusContent: TypeBonus | null
}

export enum BonusActionEnum {
  SET_BONUS = 'SET-BONUS',
}

export interface SetBonusAction {
  type: BonusActionEnum.SET_BONUS
  payload: TypeBonus
}

export type BonusActions = SetBonusAction
