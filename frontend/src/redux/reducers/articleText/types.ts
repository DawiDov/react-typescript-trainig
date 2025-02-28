import { TypeArticles } from 'redux/reducers/articles/types'

export interface TypeArticleText {
  article_id: TypeArticles | null
  title: string
  text: string
  text_2: string
  text_3: string
  extra_task: number
  image_1: string | null
  image_2: string | null
  image_3: string | null
}

export interface TypeArticleTextState {
  articleText: TypeArticleText | null
}

/* eslint-disable */
export enum ArticleTextActionEnum {
  SET_ARTICLE_TEXT = 'SET-ARTICLE-TEXT'
}
/* eslint-enable */

export interface SetArticlesTextAction {
  type: ArticleTextActionEnum.SET_ARTICLE_TEXT
  payload: TypeArticleText
}

export type ArticleTextActions = SetArticlesTextAction
