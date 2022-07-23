import React, { FC, useState } from 'react'
import getToken from 'api/auth'
import { FormLabel } from '@mui/material'

const Login: FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPass] = useState<string>('')

  const authHandler = () => {
    getToken({ username, password })
  }
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
