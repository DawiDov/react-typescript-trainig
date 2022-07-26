import React, { FC } from 'react'
import { Layout, Row, Card } from 'antd'
import AuthForm from 'components/form'
import 'antd/dist/antd.css'
import './index.sass'

const Login: FC = () => (
  <Layout>
    <Row justify="center" align="middle" className="h100">
      <Card className="loginCard">
        <AuthForm />
      </Card>
    </Row>
  </Layout>
)

export default Login
