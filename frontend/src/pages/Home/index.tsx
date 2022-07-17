import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab'

import { Navigate } from 'react-router-dom'
import { Divider, Pagination, Paper, Typography } from '@mui/material'
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

const Home = () => {
  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" replace />
  }
  return (
    <Box sx={{ padding: '10px', margin: '40px auto' }}>
      <Timeline>
        {titleList.map((day) => (
          <TimelineItem key={day}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={7} sx={{ padding: '10px 20px', width: '50px' }}>
                <Typography
                  sx={{ textTransform: 'uppercase', minWidth: '100px' }}>
                  {day}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Divider sx={{ margin: '20px' }} />
      <Pagination count={4} color="primary" />
    </Box>
  )
}

export default Home
