import { AppBar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => (
  <footer>
    <AppBar
      position="static"
      color="secondary"
      sx={{ padding: '20px', width: '100vw' }}>
      <Box>this is footer</Box>
    </AppBar>
  </footer>
)

export default Footer
