import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { Navigate } from 'react-router-dom'
import useArticleID from 'hooks/useArticleID'
import authTokenHandler from 'redux/reducers/auth/authStorage'
import useActions from 'hooks/useActions'
import ArticleText from 'components/articleText'
import AccessButton from 'components/accessButton'
import { useTypedSelector } from 'redux/store'

const ArticlePage: React.FC = () => {
  const { articleText } = useTypedSelector((state) => state.articleTextReducer)
  const location = useArticleID()
  const { setIsBackButton, getArticleText } = useActions()
  useEffect(() => {
    getArticleText(location)
    setIsBackButton(true)
  }, [])
  const isToken = authTokenHandler.checkToken()

  if (!isToken) {
    return <Navigate to="/login" replace />
  }
  return (
    <Container
      sx={{
        padding: '0 0 30px 0',
      }}>
      <ArticleText />
      {articleText?.article_id && (
        <AccessButton pk={articleText.article_id.pk} />
      )}
    </Container>
  )
}

export default ArticlePage
