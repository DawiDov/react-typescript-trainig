import React from 'react'
import { Typography, Box } from '@mui/material'
import { useTypedSelector } from 'redux/store'
import setInnerHTML from 'utils/SetInnerHTML'

const ArticleText: React.FC = () => {
  const { articleText } = useTypedSelector((state) => state.articleTextReducer)
  return (
    <Box component="div">
      <Typography align="center" variant="h2">
        {articleText && articleText.title}
      </Typography>
      {articleText && (
        <div dangerouslySetInnerHTML={setInnerHTML(articleText.text)} />
      )}
    </Box>
  )
}

export default ArticleText
