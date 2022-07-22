import React, { FC, useState } from 'react'
import { Navigate } from 'react-router-dom'
import getToken from 'api/auth'
import { FormLabel } from '@mui/material'

const Login: FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPass] = useState<string>('')

  const authHandler = () => {
    getToken({ username, password })
  }
  if (localStorage.getItem('token')) return <Navigate to="/" replace />
  return (
    <form>
      <FormLabel>
        Login:
        <input
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
          type="text"
          name="name"
        />
      </FormLabel>
      <FormLabel>
        Password:
        <input
          value={password}
          onChange={(e) => setPass(e.currentTarget.value)}
          type="text"
          name="name"
        />
      </FormLabel>
      <button type="button" onClick={authHandler}>
        Авторизация
      </button>
    </form>
  )
}

export default Login
