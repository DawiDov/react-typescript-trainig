import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const titleList: Array<string> = [
  'day 1',
  'day 2',
  'day 3',
  'day 4',
  'day 5',
  'day 6',
  'day 7',
]

const Home = () => (
  <Box sx={{ height: '100vh', padding: '20px', margin: '40px auto' }}>
    {titleList.map((day) => (
      <Paper
        key={day}
        elevation={4}
        sx={{ marginBottom: '30px', padding: '10px 50px' }}>
        <Typography variant="h4" sx={{ textTransform: 'uper' }}>
          {day}
        </Typography>
      </Paper>
    ))}
  </Box>
)

export default Home
