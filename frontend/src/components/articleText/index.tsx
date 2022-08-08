import React from 'react'
import { Typography, Box } from '@mui/material'
import { useTypedSelector } from 'redux/store'
import setInnerHTML from 'utils/SetInnerHTML'

const ArticleText: React.FC = () => {
  const { articleText } = useTypedSelector((state) => state.articleTextReducer)
  return (
    <Box
      component="div"
      sx={{
        padding: '30px 5px 30px 15px',
      }}>
      <Typography
        align="center"
        variant="h6"
        sx={{
          padding: '0 0 20px 0',
        }}>
        {articleText && articleText.title}
      </Typography>
      <Typography>
        {articleText && (
          <div dangerouslySetInnerHTML={setInnerHTML(articleText.text)} />
        )}
      </Typography>
      {articleText?.image_1 && (
        <Box>
          <img
            src={articleText.image_1}
            alt="image_1"
            style={{
              width: '100%',
              padding: '10px 0 15px 0',
            }}
          />
        </Box>
      )}
      <Typography>
        {articleText?.text_2 && (
          <div dangerouslySetInnerHTML={setInnerHTML(articleText.text_2)} />
        )}
      </Typography>
      {articleText?.image_2 && (
        <Box>
          <img
            src={articleText.image_2}
            alt="image_1"
            style={{
              width: '100%',
              padding: '10px 0 15px 0',
            }}
          />
        </Box>
      )}
      <Typography>
        {articleText?.text_3 && (
          <div dangerouslySetInnerHTML={setInnerHTML(articleText.text_3)} />
        )}
      </Typography>
      {articleText?.image_3 && (
        <Box>
          <img
            src={articleText.image_3}
            alt="image_1"
            style={{
              width: '100%',
              padding: '10px 0 15px 0',
            }}
          />
        </Box>
      )}
    </Box>
  )
}

export default ArticleText
