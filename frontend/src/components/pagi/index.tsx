import React from 'react'
import useActions from 'hooks/useActions'
import { useTypedSelector } from 'redux/store'
import { Pagination } from '@mui/material'

const Pagi: React.FC = () => {
  const { getArticles } = useActions()
  const { count } = useTypedSelector((state) => ({
    count: state.articlesReducer.count,
  }))
  return (
    <Pagination
      onChange={(e, value) => e && getArticles(value)}
      size="large"
      count={count / 5}
      variant="outlined"
      shape="rounded"
    />
  )
}

export default Pagi
