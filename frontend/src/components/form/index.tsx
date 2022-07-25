import React, { FC, useState } from 'react'
import { Button, Form, Input } from 'antd'
import 'antd/dist/antd.css'
import rules from 'utils/rules'
import getToken from 'api/auth'
import authActionCreators from 'redux/reducers/auth/actionCreators'
import { useTypedDispatch } from 'redux/store'

const AuthForm: FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPass] = useState<string>('')

  const dispatch = useTypedDispatch()

  const authHandler = () => {
    getToken({ username, password })
  }
  const submit = () => {
    dispatch(authActionCreators.login(username, password))
  }

  return (
    <Form
      onFinish={submit}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off">
      <Form.Item
        label="User"
        name="username"
        rules={[rules.required('Введите имя пользователя!')]}>
        <Input
          onChange={(e) => setUsername(e.currentTarget.value)}
          value={username}
        />
      </Form.Item>

      <Form.Item
        label="Pass"
        name="password"
        rules={[rules.required('Введите пароль!')]}>
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
