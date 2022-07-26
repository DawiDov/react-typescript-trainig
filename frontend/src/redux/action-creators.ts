import authActionCreators from 'redux/reducers/auth/actionCreators'
import articlesActionCreators from 'redux/reducers/articles/actionCreators'

const allActionCreators = {
  ...authActionCreators,
  ...articlesActionCreators,
}

export default allActionCreators
