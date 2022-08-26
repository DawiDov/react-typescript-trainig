import authActionCreators from 'redux/reducers/auth/actionCreators'
import articlesActionCreators from 'redux/reducers/articles/actionCreators'
import commonActionCreators from 'redux/reducers/common/actionCreators'
import articleTextActionCreators from 'redux/reducers/articleText/actionCreators'
import bonusActionCreators from 'redux/reducers/bonus/actionCreators'

const allActionCreators = {
  ...authActionCreators,
  ...articlesActionCreators,
  ...commonActionCreators,
  ...articleTextActionCreators,
  ...bonusActionCreators,
}

export default allActionCreators
