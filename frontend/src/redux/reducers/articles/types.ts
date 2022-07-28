export interface TypeArticles {
  pk: number
  title: string
  label: string
  is_blocked: boolean
}

export interface TypeArticlesState {
  count: number
  next: string | null
  previous: string | null
  articles: Array<TypeArticles> | null
}

/* eslint-disable */
export enum ArticlesActionEnum {
  SET_ARTICLES = 'SET-ARTICLES',
  SET_COUNT = 'SET-COUNT',
  SET_NEXT = 'SET-NEXT',
  SET_PREVIOUS = 'SET-PREVIOUS',
}
/* eslint-enable */

export interface SetArticlesAction {
  type: ArticlesActionEnum.SET_ARTICLES
  payload: Array<TypeArticles>
}

export interface SetCountAction {
  type: ArticlesActionEnum.SET_COUNT
  payload: number
}

export interface SetNextAction {
  type: ArticlesActionEnum.SET_NEXT
  payload: string
}

export interface SetPreviousAction {
  type: ArticlesActionEnum.SET_PREVIOUS
  payload: string
}

export type AtrticlesActions =
  | SetArticlesAction
  | SetCountAction
  | SetNextAction
  | SetPreviousAction
