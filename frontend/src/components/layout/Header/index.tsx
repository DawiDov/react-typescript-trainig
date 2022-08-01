import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import useActions from 'hooks/useActions'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from 'redux/store'
import './index.sass'

const Header = () => {
  const { isBackButton } = useTypedSelector((state) => ({
    isBackButton: state.commonReducer.isBackButton,
  }))
  const navigate = useNavigate()
  const { logout } = useActions()
  const userName = localStorage.getItem('username')
  const exitHandler = (e: any) => {
    e.preventDefault()
    logout()
  }
  const backHandler = (e: any) => {
    e.preventDefault()
    navigate(-1)
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
            />
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: '11px',
              }}>
              Мастерская Желаний
            </Typography>
            <Box>
              {!isBackButton ? (
                <Typography
                  sx={{
                    fontSize: '20px',
                  }}>
                  {`${userName}: `}
                </Typography>
              ) : null}
            </Box>
            <Box>
              {!isBackButton ? (
                <Button onClick={exitHandler} color="inherit">
                  <Typography
                    sx={{
                      fontSize: '15px',
                      textDecoration: 'underline',
                    }}>
                    выход
                  </Typography>
                </Button>
              ) : (
                <Button onClick={backHandler} color="inherit">
                  <Typography
                    sx={{
                      textDecoration: 'underline',
                    }}>
                    назад
                  </Typography>
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}
export default Header
