import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { TypeArticles } from 'redux/reducers/articles/types'
import useActions from 'hooks/useActions'
import 'components/tile/index.sass'

const AccessButton: React.FC<Pick<TypeArticles, 'pk'>> = ({ pk }) => { // eslint-disable-line
  const { updateArtileAccess } = useActions()
  const accessHandler = () => {
    updateArtileAccess(pk + 1, false)
  }

  return (
    <Box
      key={pk}
      sx={{
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

export default AccessButton
