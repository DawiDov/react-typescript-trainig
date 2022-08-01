import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { Navigate } from 'react-router-dom'
import authTokenHandler from 'redux/reducers/auth/authStorage'
import useActions from 'hooks/useActions'

const ArticlePage: React.FC = () => {
  const { setIsBackButton } = useActions()
  useEffect(() => {
    setIsBackButton(true)
  }, [])
  const isToken = authTokenHandler.checkToken()

  if (!isToken) {
    return <Navigate to="/login" replace />
  }
  return (
    <Container>
      <p>Hello World !!!</p>
    </Container>
  )
}

export default ArticlePage
