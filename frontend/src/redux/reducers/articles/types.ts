export interface TypeArticles {
  pk: number
  title: string
  label: string
}
type User = {
  username: string
}
export interface TypeArticleAccess {
  [article: string]: boolean | string | User
}

export interface TypeArticlesState {
  count: number
  articles: Array<TypeArticles> | null
  articleAccess: TypeArticleAccess | null
}

/* eslint-disable */
export enum ArticlesActionEnum {
  SET_ARTICLES = 'SET-ARTICLES',
  SET_ARTICLE_ACCESS = 'SET-ARTICLE-ACCESS',
  SET_CURRENT_ARTICLE_ACCESS = 'SET-CURRENT-ARTICLE-ACCESS',
  SET_COUNT = 'SET-COUNT',
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

export interface SetArticleAccessAction {
  type: ArticlesActionEnum.SET_ARTICLE_ACCESS
  payload: TypeArticleAccess
}

export interface SetCurrentArticleAccessAction {
  type: ArticlesActionEnum.SET_CURRENT_ARTICLE_ACCESS
  payload: { key: number; data: boolean }
}

export type AtrticlesActions =
  | SetArticlesAction
  | SetCountAction
  | SetArticleAccessAction
  | SetCurrentArticleAccessAction
