import React from 'react'
import { Outlet, useLocation, Navigate } from 'react-router-dom'
import Header from 'components/layout/Header'
import { Box } from '@mui/system'

const Layout = () => {
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
