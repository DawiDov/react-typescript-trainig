import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
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
    <Footer />
  </Box>
)

export default Layout
