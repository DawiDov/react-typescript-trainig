import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { Navigate } from 'react-router-dom'
import authTokenHandler from 'redux/reducers/auth/authStorage'
import CommonMenuButton from 'pages/Conclusion/button'
import result from 'icons/result_Increasing_income.png'

const Conclusion = () => {
  const isToken = authTokenHandler.checkToken()

  if (!isToken) {
    return <Navigate to="/login" replace />
  }

  return (
    <Box
      sx={{
        padding: '20px',
      }}>
      <Divider sx={{ margin: '10px' }} />
      <Typography
        sx={{
          margin: '0 0 20px 0',
        }}>
        Теперь вы знаете многое о том как устроен мир успешных людей, как они
        ставят цели и идут к ним. Как улучшить своё финансовое положение. Как
        работать с материальными целями и увеличить уровень дохода.
      </Typography>
      <Typography>
        У Вас было много вопросов, а ответы на них вы всегда найдете в своем
        блокноте. Этот блокнот теперь ваш путеводитель к успеху.
      </Typography>
      <Typography>
        <strong>Все в ВАШИХ руках.</strong>
      </Typography>
      <img
        src={result}
        alt="result list"
        style={{
          width: '100%',
          margin: '20px 0 0 0',
        }}
      />
      <Divider sx={{ margin: '20px' }} />
      <CommonMenuButton />
    </Box>
  )
}

export default Conclusion
