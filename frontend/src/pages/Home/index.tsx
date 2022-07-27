import React, { useEffect } from 'react'
import useActions from 'hooks/useActions'
import { Container, Box, Paper } from '@mui/material'
import { useTypedSelector } from 'redux/store'

const Home: React.FC = () => {
  const { count, next, previous, articles } = useTypedSelector((state) => ({
    count: state.articlesReducer.count,
    next: state.articlesReducer.next,
    previous: state.articlesReducer.previous,
    articles: state.articlesReducer.articles,
  }))

  const { getArticles } = useActions()

  useEffect(() => {
    getArticles()
  }, [])
  return (
    <Container>
      <Box>
        <Papers />
      </Box>
    </Container>
  )
}

export default Home
