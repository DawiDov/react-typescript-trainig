import {
  TypeArcticlesState,
  AtrticlesActions,
  ArticlesActionEnum,
} from 'redux/reducers/articles/types'

const initialState = {
  articles: null,
}

const articlesReducer = (
  state: TypeArcticlesState = initialState, // eslint-disable-line
  action: AtrticlesActions,
): TypeArcticlesState => {
  switch (action.type) {
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
