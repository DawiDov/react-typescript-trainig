import axios from 'utils/axios'

import {
  ArticleTextActionEnum,
  SetArticlesTextAction,
  TypeArticleText,
} from 'redux/reducers/articleText/types'

import { AppDispatch } from 'redux/store'
import authTokenHandler from 'redux/reducers/auth/authStorage'

const articleTextActionCreators = {
  setArticleText: (articleText: TypeArticleText): SetArticlesTextAction => ({
    type: ArticleTextActionEnum.SET_ARTICLE_TEXT,
    payload: articleText,
  }),
  getArticleText: (id: number) => async (dispatch: AppDispatch) => {
    const token: string | null = authTokenHandler.getToken()
    const url: string = `api/article-text/${id}/`
    const requestHeaders = {
      'Authorization': `Token ${token}`, // eslint-disable-line
      'Content-Type': 'application/json',
    }
    try {
      const resp = await axios.get(url, { headers: requestHeaders })
      dispatch(articleTextActionCreators.setArticleText(resp.data))
    } catch (e) {
      console.log(e) //eslint-disable-line
    }
  },
}

export default articleTextActionCreators
