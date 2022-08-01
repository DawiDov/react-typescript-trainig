import authActionCreators from 'redux/reducers/auth/actionCreators'
import articlesActionCreators from 'redux/reducers/articles/actionCreators'
import commonActionCreators from 'redux/reducers/common/actionCreators'

const allActionCreators = {
  ...authActionCreators,
  ...articlesActionCreators,
  ...commonActionCreators,
}

export default allActionCreators
