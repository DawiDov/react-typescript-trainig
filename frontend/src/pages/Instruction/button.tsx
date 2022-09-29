import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { Link, Navigate } from 'react-router-dom'
import { useTypedSelector } from 'redux/store'
import useActions from 'hooks/useActions'
import 'components/tile/index.sass'

const InstUpdateAccessButton: React.FC = () => {
  const { instruction } = useTypedSelector((state) => ({
    instruction: state.articlesReducer.articleAccess?.instruction,
  }))
  const { updateInstructionAccess } = useActions()
  const accessHandler = () => {
    sessionStorage.setItem('currentPage', '1')
    instruction && updateInstructionAccess(false) // eslint-disable-line
    return <Navigate to="/articles" replace />
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
              fontSize: '22px',
              fontFamily: 'Jost, sans-serif',
            }}>
            Продолжить
          </Typography>
        </Paper>
      </Link>
    </Box>
  )
}

export default InstUpdateAccessButton
