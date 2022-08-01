import React from 'react'
import { Container } from '@mui/material'
import { Navigate } from 'react-router-dom'
import authTokenHandler from 'redux/reducers/auth/authStorage'

const ArticlePage: React.FC = () => {
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
