import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { Navigate } from 'react-router-dom'
import useArticleID from 'hooks/useArticleID'
import authTokenHandler from 'redux/reducers/auth/authStorage'
import useActions from 'hooks/useActions'
import useAccess from 'hooks/useAccess'
import ArticleText from 'components/articleText'
import BonusContent from 'components/bonusContent'
import AccessButton from 'components/accessButton'
import { useTypedSelector } from 'redux/store'

const BasePage: React.FC = () => {
  const { getArticleAccess, setIsBackButton, getArticleText, getBonusContent } =
    useActions()

  const { pk } = useTypedSelector((state) => ({
    pk: state.articleTextReducer.articleText?.article_id?.pk,
  }))
  useEffect(() => {
    getArticleAccess()
  }, [])
  const isBlocked = useAccess(pk!)

  const location = useArticleID()

  const isToken = authTokenHandler.checkToken()

  useEffect(() => {
    getArticleText(location)
    getBonusContent(location)
    setIsBackButton(true)
  }, [])

  if (!isToken) {
    return <Navigate to="/login" replace />
  }
  if (isBlocked) {
    return <Navigate to="/articles" replace />
  }

  return (
    <Container
      sx={{
        padding: '30px 15px 30px 30px',
      }}>
      <ArticleText />
      <BonusContent />
      <AccessButton pk={pk!} />
    </Container>
  )
}

export default BasePage
