import React, { useEffect } from 'react'
import { Outlet, useLocation, Navigate } from 'react-router-dom'
import useActions from 'hooks/useActions'
import { useTypedSelector } from 'redux/store'
import Header from 'components/layout/Header'
import { Box } from '@mui/system'

const Layout = () => {
  const { getArticleAccess, getArticles } = useActions()
  const currentPage: string | null = sessionStorage.getItem('currentPage')

  useEffect(() => {
    getArticleAccess()
  }, [])

  const { instruction } = useTypedSelector((state) => ({
    instruction: state.articlesReducer.articleAccess?.instruction,
  }))

  useEffect(() => {
    instruction || getArticles(+currentPage!) // eslint-disable-line
  }, [currentPage])

  const location = useLocation()

  if (location.pathname === '/') {
    return <Navigate to="/login" replace />
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Header />
      <Outlet />
    </Box>
  )
}

export default Layout
