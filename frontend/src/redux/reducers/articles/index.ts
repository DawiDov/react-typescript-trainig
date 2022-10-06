import {
  TypeArticlesState,
  AtrticlesActions,
  ArticlesActionEnum,
} from 'redux/reducers/articles/types'

const initialState = {
  count: 0,
  articles: null,
  articleAccess: null,
}

const articlesReducer = (
  state: TypeArticlesState = initialState, // eslint-disable-line
  action: AtrticlesActions,
): TypeArticlesState => {
  switch (action.type) {
    case ArticlesActionEnum.SET_COUNT:
      return {
        ...state,
        count: action.payload,
      }
    case ArticlesActionEnum.SET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      }
    case ArticlesActionEnum.SET_ARTICLE_ACCESS:
      return {
        ...state,
        articleAccess: action.payload,
      }
    case ArticlesActionEnum.SET_CURRENT_ARTICLE_ACCESS:
      return {
        ...state,
        articleAccess: {
          ...state.articleAccess,
          [`article_${action.payload.key}`]: action.payload.data,
        },
      }
    default:
      return state
  }
}

export default articlesReducer
