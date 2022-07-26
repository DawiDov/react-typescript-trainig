import axios from 'axios'
import {
  ArticlesActionEnum,
  SetArticlesAction,
  SetIsBlockAction,
  TypeArticles,
} from 'redux/reducers/articles/types'
import { AppDispatch } from 'redux/store'

const articlesActionCreators = {
  setArticles: (articles: TypeArticles): SetArticlesAction => ({
    type: ArticlesActionEnum.SET_ARTICLES,
    payload: articles,
  }),
  setIsBlock: (isBlock: boolean): SetIsBlockAction => ({
    type: ArticlesActionEnum.SET_IS_BLOCK,
    payload: isBlock,
  }),
  getArticles: () => async (dispatch: AppDispatch) => {
    const token: string | null = localStorage.getItem('token')
    const url: string = 'http://localhost/api/articles'

    const requestHeaders = {
      'Authorization': `Token ${token}`, // eslint-disable-line
      'Content-Type': 'application/json',
    }
    try {
      const resp = await axios.get(url, { headers: requestHeaders })
      dispatch(articlesActionCreators.setArticles(resp.data))
    } catch (e) {
      console.log(e) // eslint-disable-line
    }
  },
}

export default articlesActionCreators
