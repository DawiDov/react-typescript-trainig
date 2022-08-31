import React from 'react'

import { useTypedSelector } from 'redux/store'
import { Navigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import authTokenHandler from 'redux/reducers/auth/authStorage'
import useActions from 'hooks/useActions'
import starActive from 'icons/star_active.png'
import starEmpty from 'icons/star_empty.png'
import 'components/starList/index.sass'

const StarList: React.FC = () => {
  const { getArticleAccess } = useActions()
  const isToken = authTokenHandler.checkToken()
  if (!isToken) {
    return <Navigate to="/login" replace />
  }
  /* eslint-disable */
  const {
    articleAccess,
    article_1,
    article_2,
    article_3,
    article_4,
    article_5,
    article_6,
    article_7,
    article_8,
    article_9,
    article_10,
    article_11,
    article_12,
    article_13,
    article_14,
    article_15,
    article_16,
    article_17,
    article_18,
    article_19,
    article_20,
  } =
    useTypedSelector((state) => ({
      articleAccess: state.articlesReducer.articleAccess,
      article_1: state.articlesReducer.articleAccess?.article_1,
      article_2: state.articlesReducer.articleAccess?.article_2,
      article_3: state.articlesReducer.articleAccess?.article_3,
      article_4: state.articlesReducer.articleAccess?.article_4,
      article_5: state.articlesReducer.articleAccess?.article_5,
      article_6: state.articlesReducer.articleAccess?.article_6,
      article_7: state.articlesReducer.articleAccess?.article_7,
      article_8: state.articlesReducer.articleAccess?.article_8,
      article_9: state.articlesReducer.articleAccess?.article_9,
      article_10: state.articlesReducer.articleAccess?.article_10,
      article_11: state.articlesReducer.articleAccess?.article_11,
      article_12: state.articlesReducer.articleAccess?.article_12,
      article_13: state.articlesReducer.articleAccess?.article_13,
      article_14: state.articlesReducer.articleAccess?.article_14,
      article_15: state.articlesReducer.articleAccess?.article_15,
      article_16: state.articlesReducer.articleAccess?.article_16,
      article_17: state.articlesReducer.articleAccess?.article_17,
      article_18: state.articlesReducer.articleAccess?.article_18,
      article_19: state.articlesReducer.articleAccess?.article_19,
      article_20: state.articlesReducer.articleAccess?.article_20,
    }))

  if (articleAccess === null) {
    getArticleAccess()
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Typography align='center' variant='h5'>
        Ваш путь по курсу !
      </Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Box className='StarWrapper'>
          <img src={article_1 ? starEmpty : starActive} />
          <img src={article_2 ? starEmpty : starActive} />
          <img src={article_3 ? starEmpty : starActive} />
          <img src={article_4 ? starEmpty : starActive} />
          <img src={article_5 ? starEmpty : starActive} />
          <img src={article_6 ? starEmpty : starActive} />
          <img src={article_7 ? starEmpty : starActive} />
          <img src={article_8 ? starEmpty : starActive} />
          <img src={article_9 ? starEmpty : starActive} />
          <img src={article_10 ? starEmpty : starActive} />
          <img src={article_11 ? starEmpty : starActive} />
          <img src={article_12 ? starEmpty : starActive} />
          <img src={article_13 ? starEmpty : starActive} />
          <img src={article_14 ? starEmpty : starActive} />
          <img src={article_15 ? starEmpty : starActive} />
          <img src={article_16 ? starEmpty : starActive} />
          <img src={article_17 ? starEmpty : starActive} />
          <img src={article_18 ? starEmpty : starActive} />
          <img src={article_19 ? starEmpty : starActive} />
          <img src={article_20 ? starEmpty : starActive} />
        </Box>
      </Box>
    </Box>
  )
}
/* eslint-enable */

export default StarList
