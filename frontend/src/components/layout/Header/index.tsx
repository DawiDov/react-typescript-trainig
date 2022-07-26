import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import authActionCreators from 'redux/reducers/auth/actionCreators'
import { useTypedDispatch } from 'redux/store'

const Header = () => {
  const dispatch = useTypedDispatch()
  const userName = localStorage.getItem('username')
  const exitHandler = () => {
    dispatch(authActionCreators.logout())
  }
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Курс
            </Typography>
            <Box>
              <Typography>{userName}</Typography>
            </Box>
            <Box>
              <Button onClick={exitHandler} color="inherit">
                <Typography>Выйти</Typography>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}
export default Header
