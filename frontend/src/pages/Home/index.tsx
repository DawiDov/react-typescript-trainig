import React, { useEffect } from 'react'

import useActions from 'hooks/useActions'
import { useTypedSelector } from 'redux/store'

import { TypeArticles } from 'redux/reducers/articles/types'
import { Navigate } from 'react-router-dom'

import Tile from 'components/tile'
import Pagi from 'components/pagi'

import { Container, Grid } from '@mui/material'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import authTokenHandler from 'redux/reducers/auth/authStorage'

const Home: React.FC = () => {
  const isToken = authTokenHandler.checkToken()
  const { getArticles, setIsBackButton } = useActions()

  const { articles, currentPage } = useTypedSelector((state) => ({
    articles: state.articlesReducer.articles,
    currentPage: state.commonReducer.currentPage,
  }))

  useEffect(() => {
    getArticles(currentPage)
    setIsBackButton(false)
  }, [])

  if (!isToken) {
    return <Navigate to="/login" replace />
  }
  return (
    <Container
      sx={{
        backgroundColor: '#FFDEE9',
        backgroundImage: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
      }}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ height: 'calc(100vh - 60px)' }}>
        {articles &&
          articles.map(
            (elem: TypeArticles): ReactJSXElement => <Tile key={elem.pk} {...elem} />, // eslint-disable-line
          )}
        <Pagi />
      </Grid>
    </Container>
  )
}

export default Home
