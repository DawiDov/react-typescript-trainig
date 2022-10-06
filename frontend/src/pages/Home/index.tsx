import React, { useEffect, useState } from 'react'

import useActions from 'hooks/useActions'
import { useTypedSelector } from 'redux/store'

import { TypeArticles } from 'redux/reducers/articles/types'
import { Navigate } from 'react-router-dom'

import Tile from 'components/tile'
import Pagi from 'components/pagi'

import { Container, Grid, Box } from '@mui/material'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import Modal from '@mui/material/Modal'
import authTokenHandler from 'redux/reducers/auth/authStorage'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#1876D1',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

const Home: React.FC = () => {
  const [modal, setModal] = useState(false)
  const isToken = authTokenHandler.checkToken()
  const { setIsBackButton } = useActions()

  const { articles, instruction } = useTypedSelector((state) => ({
    articles: state.articlesReducer.articles,
    instruction: state.articlesReducer.articleAccess?.instruction,
  }))

  useEffect(() => {
    setIsBackButton(false)
  }, [])

  if (!isToken) {
    return <Navigate to="/login" replace />
  }
  if (instruction) {
    return <Navigate to="/instruction" replace />
  }
  return (
    <Container
      sx={{
        backgroundColor: '#FFDEE9',
        backgroundImage: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
      }}>
      <Modal open={modal} onClose={setModal}>
        <Box
          sx={{
            ...style,
            width: '300px',
            borderRadius: '10px',
            textAlign: 'center',
          }}>
          Эта часть пока заблокированна
          <button
            type="button"
            onClick={() => setModal(false)}
            style={{
              margin: '10px 0 0 0',
              height: '25px',
              width: '80px',
              border: '1px solid black',
              borderRadius: '15px',
            }}>
            Закрыть
          </button>
        </Box>
      </Modal>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ height: 'calc(100vh - 60px)' }}>
        {articles &&
          articles.map(
            (elem: TypeArticles): ReactJSXElement => <Tile setModal={setModal} key={elem.pk} {...elem} />, // eslint-disable-line
          )}
        <div id="modal-root" />
        <Pagi />
      </Grid>
    </Container>
  )
}

export default Home
