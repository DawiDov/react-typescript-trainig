import React, { useEffect } from 'react'
import { Outlet, useLocation, Navigate } from 'react-router-dom'
import useActions from 'hooks/useActions'
import Header from 'components/layout/Header'
import { Box } from '@mui/system'

const Layout = () => {
  const { getArticleAccess, getArticles } = useActions()
  const currentPage: string | null = sessionStorage.getItem('currentPage')

  useEffect(() => {
    getArticleAccess()
  }, [])

  useEffect(() => {
    getArticles(+currentPage!)
  }, [currentPage])

  const location = useLocation()

  if (location.pathname === '/') {
    return <Navigate to="/login" replace />
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Header />
      <Outlet />
    </Box>
  )
}

export default Layout
