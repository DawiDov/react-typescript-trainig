import React from 'react'
import useActions from 'hooks/useActions'
import { useTypedSelector } from 'redux/store'
import { Pagination } from '@mui/material'

const Pagi: React.FC = () => {
  const { getArticles, setCurrentPage } = useActions()
  const { count, currentPage } = useTypedSelector((state) => ({
    count: state.articlesReducer.count,
    currentPage: state.commonReducer.currentPage,
  }))

  const changePageHandler = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value)
    getArticles(value)
  }

  return (
    <Pagination
      page={currentPage}
      onChange={changePageHandler}
      size="large"
      count={count / 5}
      variant="outlined"
      shape="rounded"
    />
  )
}

export default Pagi
