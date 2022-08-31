import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { TypeArticles } from 'redux/reducers/articles/types'
import useActions from 'hooks/useActions'
import useAccess from 'hooks/useAccess'
import 'components/tile/index.sass'

const AccessButton: React.FC<Pick<TypeArticles, 'pk'>> = ({ pk }) => { // eslint-disable-line
  const article = useAccess(pk + 1)
  const { updateArtileAccess } = useActions()

  const accessHandler = () => {
    pk === 20 || article && updateArtileAccess(pk + 1, false) // eslint-disable-line
  }

  return (
    <Box
      key={pk}
      sx={{
        margin: '80px 0 0 0',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Link
        to={pk === 20 ? '/conclusion' : '/articles'}
        onClick={accessHandler}>
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
            {pk === 20 ? 'Заключение' : 'Продолжить'}
          </Typography>
        </Paper>
      </Link>
    </Box>
  )
}

export default AccessButton
