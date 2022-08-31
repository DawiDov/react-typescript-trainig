import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { Navigate } from 'react-router-dom'
import authTokenHandler from 'redux/reducers/auth/authStorage'
import CommonMenuButton from 'pages/Conclusion/button'

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
        ставят цели и идут к ним. У Вас было много вопросов, и ответы на них вы
        найдете в своем блокноте, этот блокнот теперь Ваш путеводитель к успеху
        и удовлетворению от жизни.{' '}
      </Typography>
      <Typography>
        Анализируйте себя и окружающий мир, ставьте цели и стремитесь к ним. Все
        в ВАШИХ руках.
      </Typography>
      <Divider sx={{ margin: '10px' }} />
      <CommonMenuButton />
    </Box>
  )
}

export default Conclusion
