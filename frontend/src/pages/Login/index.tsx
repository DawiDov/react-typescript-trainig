import React, { FC } from 'react'
import { Layout, Row } from 'antd'
import AuthForm from 'components/form'
import 'antd/dist/antd.css'
import './index.sass'

const Login: FC = () => (
  <Layout>
    <Row justify="center" align="middle" className="h100">
      <AuthForm />
    </Row>
  </Layout>
)

export default Login
