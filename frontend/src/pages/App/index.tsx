import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Layout from 'components/layout/Layout'

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
)

export default App
