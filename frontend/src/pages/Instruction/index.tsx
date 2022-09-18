import React, { useEffect } from 'react'

import { Navigate } from 'react-router-dom'
import { Typography, Box, Divider } from '@mui/material'

import useActions from 'hooks/useActions'

import InstUpdateAccessButton from 'pages/Instruction/button'
import authTokenHandler from 'redux/reducers/auth/authStorage'
import StarList from 'components/starList'

import 'pages/Instruction/index.sass'

const Instruction: React.FC = () => {
  const { setIsBackButton } = useActions()

  useEffect(() => {
    setIsBackButton(true)
  }, [])

  const isToken = authTokenHandler.checkToken()

  if (!isToken) {
    return <Navigate to="/login" replace />
  }
  return (
    /* eslint-disable */
    <Box
      sx={{
        padding: '30px 15px 30px 30px',
      }}>
      <Box>
        <Typography
          variant="h5"
          align="center"
          className='styleTypography'
        >
          Приветствую Вас, мои волшебники !
        </Typography>
        <Typography
          className='styleTypography'
        >
          Вы приобрели практическое руководство - как не остаться без дохода
          в кризисные времена.  Как сохранить  и приумножить финансовое благосостояние.
        </Typography>
        <Typography
          className='styleTypography'
        >
          Во время кризиса можно начать пытаться бороться за финансы и
          находиться в страхе их потерять, либо <strong>спокойно и уверенно сохранить</strong>
          и использовать все возможности и ресурсы для роста и приумножения своего дохода.
        </Typography>
        <Typography
          className="styleTypography"
        >
          Лучшее время для расширения финансовых возможностей <strong>ПРЯМО СЕЙЧАС.</strong>
        </Typography>
        <Typography
          className="styleTypography"
        >
          Курс заставит вас думать, анализировать и работать над собой. Но я
          и не говорила, что будет легко. Я лишь обещала открыть правду.
        </Typography>
        <Typography
          className="styleTypography"
        >
          <strong>Очень важно завести блокнот и писать от руки.</strong>Таким образом будет
          происходить более глубокое погружение в материал. И вообще возьмите
          себе за привычку, если хотите усвоить какой-то материал, пишите конспект.
        </Typography>
        <Typography>
          <strong>Как будет построен курс?</strong>
        </Typography>
        <Typography
          className="styleTypography"
        >
          У вас есть 20 частей , 19 из которых заблокированы. Открываться они
          будут  поочередно. Новая часть откроется после прохождения предыдущей части.
        </Typography>
        <Typography
          className="styleTypography"
        >
          Каждая часть начинается с вводного теоретического блока и продолжается
          практическими упражнениями с конкретными действиями по увеличению дохода.
          Таким образом мы с вами применяем и отрабатываем теоретические знания в реальной жизни.
        </Typography>
        <Typography
          className="styleTypography"
        >
          В конце каждой части вас ожидает <strong>EXTRA</strong> задание на проработку денежных блоков.
          Это упражнение поможет вам перестать бояться больших сумм, понять,
          что вы достойны любых покупок и начать визуализировать свои глобальные мечты.
          Так же в некоторых частях вас будут ждать дополнительные бонусные задания и медитации.
        </Typography>
        <Typography
          className="styleTypography"
        >
          В конце курса вы получите свод всех пройденных техник и рекомендации по их применению в дальнейшем.
        </Typography>
        <Typography
          className="styleTypography"
        >
          Если вы готовы изменить жизнь, мы начинаем.
        </Typography>
        <Typography
          variant="caption"
        >
          <strong>Вы всегда сможете вернуться и перечитать эту информацию,
            в левом верхнем углу нажав кнопку «инструкция».</strong>
        </Typography>
        <Divider className='styleDivider' />
      </Box>
      <StarList />
      <InstUpdateAccessButton />
    </Box>
    /* eslint-enable */
  )
}

export default Instruction
