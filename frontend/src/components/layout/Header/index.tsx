import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import useActions from 'hooks/useActions'
import { useNavigate, Link } from 'react-router-dom'
import { useTypedSelector } from 'redux/store'
import './index.sass'

const Header = () => {
  const { isBackButton, instruction } = useTypedSelector((state) => ({
    isBackButton: state.commonReducer.isBackButton,
    instruction: state.articlesReducer.articleAccess?.instruction,
  }))
  const navigate = useNavigate()
  const { logout } = useActions()
  const userName = localStorage.getItem('username')
  const exitHandler = (e: React.ChangeEvent<unknown>) => {
    e.preventDefault()
    logout()
  }
  const backHandler = (e: React.ChangeEvent<unknown>) => {
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
              <Link
                style={{
                  color: 'white',
                  fontSize: '20px',
                }}
                to="/instruction">
                инструкция
              </Link>
            </Typography>
            <Box>
              {!isBackButton ? (
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: '500',
                  }}>
                  {`${userName}: `}
                </Typography>
              ) : null}
            </Box>
            <Box>
              {!instruction ? ( // eslint-disable-line
                !isBackButton ? (
                  <Button onClick={exitHandler} color="inherit">
                    <Typography
                      sx={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '35px',
                        border: '2px solid white',
                        fontSize: '12px',
                        padding: '16px 0 0 0',
                      }}>
                      выход
                    </Typography>
                  </Button>
                ) : (
                  <Button onClick={backHandler} color="inherit">
                    <Typography
                      sx={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '35px',
                        border: '2px solid white',
                        fontSize: '12px',
                        padding: '15px 0 0 0',
                        textDecoration: 'underline',
                      }}>
                      назад
                    </Typography>
                  </Button>
                )
              ) : null}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}
export default Header
