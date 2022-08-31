import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Layout from 'components/layout/Layout'
import ArticlePage from 'pages/ArticlePage'
import Instruction from 'pages/Instruction'
import Conclusion from 'pages/Conclusion'

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="instruction" element={<Instruction />} />
      <Route path="conclusion" element={<Conclusion />} />
      <Route path="articles" element={<Home />} />
      <Route path="articles/:id" element={<ArticlePage />} />
    </Route>
    <Route path="login" element={<Login />} />
  </Routes>
)

export default App
