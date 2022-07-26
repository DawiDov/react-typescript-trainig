import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab'

import { Divider, Pagination, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import useActions from 'hooks/useActions'
import React, { FC, useEffect } from 'react'

const titleList: Array<string> = [
  'day 1',
  'day 2',
  'day 3',
  'day 4',
  'day 5',
  'day 6',
  'day 7',
]

const Home: FC = () => {
  const { getArticles } = useActions()
  useEffect(() => {
    getArticles()
  }, [])
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
