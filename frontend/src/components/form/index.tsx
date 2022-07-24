import React, { FC, useState } from 'react'
import { Button, Form, Input } from 'antd'
import 'antd/dist/antd.css'
import getToken from 'api/auth'

const AuthForm: FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPass] = useState<string>('')

  const authHandler = () => {
    getToken({ username, password })
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off">
      <Form.Item
        label="User"
        name="username"
        rules={[
          { required: true, message: 'Пожалуйста введите имя пользователя!' },
        ]}>
        <Input
          onChange={(e) => setUsername(e.currentTarget.value)}
          value={username}
        />
      </Form.Item>

      <Form.Item
        label="Pass"
        name="password"
        rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}>
        <Input.Password
          onChange={(e) => setPass(e.currentTarget.value)}
          value={password}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button onClick={authHandler} type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AuthForm
