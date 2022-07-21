import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Layout from 'components/layout/Layout'

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
    </Route>
  </Routes>
)

export default App
