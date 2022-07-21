import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'

const Header = () => (
  <header>
    {localStorage.getItem('token') ? (
      <Button onClick={() => localStorage.removeItem('token')}>выйти</Button>
    ) : null}
    <AppBar
      color="primary"
      position="sticky"
      sx={{
        top: '0',
        width: '100vw',
        padding: '10px',
      }}>
      <Toolbar variant="dense">
        <h1>Course</h1>
      </Toolbar>
    </AppBar>
  </header>
)

export default Header
