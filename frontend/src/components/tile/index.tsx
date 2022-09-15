import React from 'react'
import { Avatar, Grid, Box, Paper, Typography } from '@mui/material'
import { TypeArticles } from 'redux/reducers/articles/types'
import useAccess from 'hooks/useAccess'
import lock from 'icons/lock.png'
import 'components/tile/index.sass'
import { useNavigate } from 'react-router-dom'

const Tile: React.FC<TypeArticles> = ({ pk, title, label }) => { // eslint-disable-line


  const navigate = useNavigate()
  const isBlocked = useAccess(pk)
  const linkHandler = () => { // eslint-disable-line
    if (!isBlocked) {
      navigate(`/articles/${pk}`)
    }
    if (isBlocked) {
      alert('Статья заблокированна')
    }
  }

  return (
    <button
      type="button"
      onClick={linkHandler}
      style={{
        borderRadius: '20px',
      }}>
      <Paper
        className="tile"
        elevation={5}
        variant="elevation"
        sx={{
          height: '90px',
          width: 'calc(100vw - 60px)',
          borderRadius: '20px',
          backgroundColor: '#18a6d1',
        }}>
        <Grid
          container
          height="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            padding: '0 10px 0 10px',
          }}>
          <Avatar
            variant="square"
            alt="Remy Sharp"
            src={isBlocked ? lock : label} // eslint-disable-line
            sx={{
              borderRadius: '35px',
              margin: '0 5px 0 0',
              width: '70px',
              height: '70px',
            }}
          />
          <Box sx={{ textAlign: 'center', maxWidth: '200px' }}>
            <Typography
              sx={{
                wordWrap: 'break-word',
                fontSize: '20px',
                fontFamily: 'Jost, sans-serif',
              }}>
              {title.charAt(0).toUpperCase() + title.slice(1)}
            </Typography>
          </Box>
        </Grid>
      </Paper>
    </button>
  )
}

export default Tile
