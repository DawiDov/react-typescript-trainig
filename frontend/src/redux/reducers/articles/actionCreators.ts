import axios from 'axios'
import {
  ArticlesActionEnum,
  SetArticlesAction,
  SetCountAction,
  TypeArticles,
} from 'redux/reducers/articles/types'
import { AppDispatch } from 'redux/store'

const articlesActionCreators = {
  setArticles: (articles: Array<TypeArticles>): SetArticlesAction => ({
    type: ArticlesActionEnum.SET_ARTICLES,
    payload: articles,
  }),
  setCount: (count: number): SetCountAction => ({
    type: ArticlesActionEnum.SET_COUNT,
    payload: count,
  }),
  getArticles: (page: number) => async (dispatch: AppDispatch) => {
    const token: string | null = localStorage.getItem('token')
    const url: string = `http://localhost/api/articles/?page=${page}`

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
}

export default articlesActionCreators
