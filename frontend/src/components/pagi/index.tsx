import React from 'react'
import useActions from 'hooks/useActions'
import { useTypedSelector } from 'redux/store'
import { Pagination } from '@mui/material'

const Pagi: React.FC = () => {
  const { getArticles } = useActions()
  const { count } = useTypedSelector((state) => ({
    count: state.articlesReducer.count,
  }))

  const changePageHandler = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    sessionStorage.setItem('currentPage', value.toString())
    getArticles(value)
  }
  const currentPage: string | null = sessionStorage.getItem('currentPage')
  return (
    <Pagination
      page={+currentPage!}
      onChange={changePageHandler}
      size="large"
      count={count / 5}
      variant="outlined"
      shape="rounded"
    />
  )
}

export default Pagi
