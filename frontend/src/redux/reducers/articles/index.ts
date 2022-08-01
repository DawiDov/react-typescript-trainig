import {
  TypeArticlesState,
  AtrticlesActions,
  ArticlesActionEnum,
} from 'redux/reducers/articles/types'

const initialState = {
  count: 0,
  articles: null,
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
    default:
      return state
  }
}

export default articlesReducer
