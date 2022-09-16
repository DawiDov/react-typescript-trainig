import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import 'antd/dist/antd.css'
import rules from 'utils/rules'
import { useTypedSelector } from 'redux/store'
import useActions from 'hooks/useActions'

const AuthForm: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPass] = useState<string>('')
  const { login } = useActions()
  const { error, isLoading } = useTypedSelector((state) => state.authReducer)
  const submit = () => {
    login(username, password)
  }

  return (
    <Form
      onFinish={submit}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off">
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form.Item
        label="user"
        name="username"
        rules={[rules.required('Введите имя пользователя!')]}>
        <Input
          onChange={(e) => setUsername(e.currentTarget.value)}
          value={username}
        />
      </Form.Item>

      <Form.Item
        label="pass"
        name="password"
        rules={[rules.required('Введите пароль!')]}>
        <Input.Password
          onChange={(e) => setPass(e.currentTarget.value)}
          value={password}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AuthForm
