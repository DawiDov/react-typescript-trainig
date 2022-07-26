export interface TypeArticles {
  tile: string
  label: string
  is_blocked: boolean
}

export interface TypeArcticlesState {
  articles: TypeArticles | null
}

/* eslint-disable */
export enum ArticlesActionEnum {
  SET_ARTICLES = 'SET-ARTICLES',
  SET_IS_BLOCK = 'SET-IS-BLOCK',
}
/* eslint-enable */

export interface SetArticlesAction {
  type: ArticlesActionEnum.SET_ARTICLES
  payload: TypeArticles
}

export interface SetIsBlockAction {
  type: ArticlesActionEnum.SET_IS_BLOCK
  payload: boolean
}

export type AtrticlesActions = SetArticlesAction | SetIsBlockAction
