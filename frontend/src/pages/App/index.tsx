import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Layout from 'components/layout/Layout'
import ArticlePage from 'pages/articlePage'

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="articles" element={<Home />} />
      <Route path="articles/:id" element={<ArticlePage />} />
    </Route>
    <Route path="login" element={<Login />} />
  </Routes>
)

export default App
