import {
  TypeArticleTextState,
  ArticleTextActions,
  ArticleTextActionEnum,
} from 'redux/reducers/articleText/types'

const initialState = {
  articleText: null,
}

const articleTextReducer = (
  state: TypeArticleTextState = initialState, // eslint-disable-line
  action: ArticleTextActions,
): TypeArticleTextState => {
  switch (action.type) {
    case ArticleTextActionEnum.SET_ARTICLE_TEXT:
      return {
        ...state,
        articleText: action.payload,
      }
    default:
      return state
  }
}

export default articleTextReducer
