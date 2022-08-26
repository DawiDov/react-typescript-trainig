import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { Navigate } from 'react-router-dom'
import useArticleID from 'hooks/useArticleID'
import authTokenHandler from 'redux/reducers/auth/authStorage'
import useActions from 'hooks/useActions'
import ArticleText from 'components/articleText'
import BonusContent from 'components/bonusContent'
import AccessButton from 'components/accessButton'
import { useTypedSelector } from 'redux/store'

const ArticlePage: React.FC = () => {
  const { articleText } = useTypedSelector((state) => state.articleTextReducer)
  const location = useArticleID()
  const { setIsBackButton, getArticleText, getBonusContent } = useActions()
  useEffect(() => {
    getArticleText(location)
    getBonusContent(location)
    setIsBackButton(true)
  }, [])
  const isToken = authTokenHandler.checkToken()

  if (!isToken) {
    return <Navigate to="/login" replace />
  }
  return (
    <Container
      sx={{
        padding: '30px 15px 30px 30px',
      }}>
      <ArticleText />
      <BonusContent />
      {articleText?.article_id && (
        <AccessButton pk={articleText.article_id.pk} />
      )}
    </Container>
  )
}

export default ArticlePage
