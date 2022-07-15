import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'components/layout/Header'
import { Box } from '@mui/system'

const Layout = () => (
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

export default Layout
