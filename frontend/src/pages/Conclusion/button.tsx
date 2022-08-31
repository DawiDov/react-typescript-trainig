import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import 'components/tile/index.sass'

const CommonMenuButton: React.FC = () => {
  const accessHandler = () => {
    sessionStorage.setItem('currentPage', '1')
  }

  return (
    <Box
      sx={{
        margin: '80px 0 0 0',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Link to="/articles" onClick={accessHandler}>
        <Paper
          className="tile"
          elevation={5}
          variant="elevation"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            width: 'calc(100vw - 90px)',
            borderRadius: '10px',
            backgroundColor: '#18a6d1',
          }}>
          <Typography
            sx={{
              textAlign: 'center',
              wordWrap: 'break-word',
              fontSize: '20px',
              fontFamily: 'Jost, sans-serif',
            }}>
            Главное Меню
          </Typography>
        </Paper>
      </Link>
    </Box>
  )
}

export default CommonMenuButton
