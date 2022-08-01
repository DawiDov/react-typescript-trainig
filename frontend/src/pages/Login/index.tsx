import React, { FC } from 'react'
import { Layout, Row, Card } from 'antd'
import { Navigate } from 'react-router-dom'
import AuthForm from 'components/form'
import 'antd/dist/antd.css'
import './index.sass'
import authTokenHandler from 'redux/reducers/auth/authStorage'
import { useTypedSelector } from 'redux/store'

const Login: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.authReducer)
  const isToken = authTokenHandler.checkToken()
  if (isToken) {
    isAuth || alert('Добро пожаловать !') // eslint-disable-line
    return <Navigate to="/articles" replace />
  }
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card className="loginCard">
          <AuthForm />
        </Card>
      </Row>
    </Layout>
  )
}

export default Login
