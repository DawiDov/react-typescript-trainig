import React, { FC } from 'react'
import { Box } from '@mui/material'
import { Navigate } from 'react-router-dom'
import AuthForm from 'components/form'
import 'antd/dist/antd.css'
import './index.sass'
import authTokenHandler from 'redux/reducers/auth/authStorage'
import { useTypedSelector } from 'redux/store'

const Login: FC = () => {
  const { isAuth } = useTypedSelector((state) => ({
    isAuth: state.authReducer.isAuth,
  }))
  const isToken = authTokenHandler.checkToken()
  if (isToken) {
    isAuth && console.log('авторизациия...') // eslint-disable-line
    return <Navigate to="/articles" replace />
  }
  return (
    <Box className="h100">
      <Box className="loginCard">
        <AuthForm />
      </Box>
    </Box>
  )
}

export default Login
