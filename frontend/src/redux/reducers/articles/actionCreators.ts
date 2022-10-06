import axios from 'utils/axios'

import {
  ArticlesActionEnum,
  SetArticlesAction,
  SetCountAction,
  SetArticleAccessAction,
  TypeArticles,
  TypeArticleAccess,
  SetCurrentArticleAccessAction,
} from 'redux/reducers/articles/types'
import { AppDispatch } from 'redux/store'

const articlesActionCreators = {
  setArticles: (articles: Array<TypeArticles>): SetArticlesAction => ({
    type: ArticlesActionEnum.SET_ARTICLES,
    payload: articles,
  }),
  setArticleAccess: (
    articleAccess: TypeArticleAccess,
  ): SetArticleAccessAction => ({
    type: ArticlesActionEnum.SET_ARTICLE_ACCESS,
    payload: articleAccess,
  }),
  setCurrentArticleAccess: (
    pk: number,
    access: boolean,
  ): SetCurrentArticleAccessAction => ({
    type: ArticlesActionEnum.SET_CURRENT_ARTICLE_ACCESS,
    payload: { key: pk, data: access },
  }),
  setCount: (count: number): SetCountAction => ({
    type: ArticlesActionEnum.SET_COUNT,
    payload: count,
  }),
  getArticles: (page: number) => async (dispatch: AppDispatch) => {
    const token: string | null = localStorage.getItem('token')
    const url: string = `api/articles/?page=${page}`

    const requestHeaders = {
      'Authorization': `Token ${token}`, // eslint-disable-line
      'Content-Type': 'application/json',
    }

    try {
      const resp = await axios.get(url, { headers: requestHeaders })
      dispatch(articlesActionCreators.setCount(resp.data.count))
      dispatch(articlesActionCreators.setArticles(resp.data.results))
    } catch (e) {
      console.log(e) // eslint-disable-line
    }
  },
  getArticleAccess: () => async (dispatch: AppDispatch) => {
    const token: string | null = localStorage.getItem('token')
    const url: string = 'api/user-access/'

    const requestHeaders = {
      'Authorization': `Token ${token}`, // eslint-disable-line
      'Content-Type': 'application/json',
    }

    try {
      const resp = await axios.get(url, { headers: requestHeaders })
      dispatch(articlesActionCreators.setArticleAccess(resp.data.results[0]))
    } catch (e) {
      console.log(e) // eslint-disable-line
    }
  },
  updateArtileAccess:
    (pk: number, isBlocked: boolean) => async (dispatch: AppDispatch) => {
      const token: string | null = localStorage.getItem('token')
      const url: string = `api/user-access/${pk}/access/`

      const requestHeaders = {
        'Authorization': `Token ${token}`, // eslint-disable-line
        'Content-Type': 'application/json',
      }
      const data = {
        is_blocked: isBlocked,
      }

      try {
        await axios.post(url, data, {
          headers: requestHeaders,
        })
        dispatch(articlesActionCreators.setCurrentArticleAccess(pk, isBlocked))
      } catch (e) {
        console.log(e) // eslint-disable-line
      }
    },
  updateInstructionAccess: async (instHandle: boolean) => {
    const token: string | null = localStorage.getItem('token')
    const url: string = 'api/user-access/inst-access/'

    const requestHeaders = {
      'Authorization': `Token ${token}`, // eslint-disable-line
      'Content-Type': 'application/json',
    }
    const data = {
      instHandle,
    }

    try {
      await axios.post(url, data, {
        headers: requestHeaders,
      })
    } catch (e) {
      console.log(e) // eslint-disable-line
    }
  },
}

export default articlesActionCreators
