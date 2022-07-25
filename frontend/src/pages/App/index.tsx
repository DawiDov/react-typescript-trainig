import React, { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Layout from 'components/layout/Layout'
import { useTypedSelector } from 'redux/store'
import useActions from 'hooks/useActions'

const App = () => {
  const { setIsAuth } = useActions()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true)
    }
  }, [])
  const { isAuth } = useTypedSelector((state) => state.authReducer)
  return isAuth ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  )
}

export default App
