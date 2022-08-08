import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { Navigate } from 'react-router-dom'
import useArticleID from 'hooks/useArticleID'
import authTokenHandler from 'redux/reducers/auth/authStorage'
import useActions from 'hooks/useActions'
import ArticleText from 'components/articleText'

const ArticlePage: React.FC = () => {
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
    <Container>
      <ArticleText />
    </Container>
  )
}

export default ArticlePage
