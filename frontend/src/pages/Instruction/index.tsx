import React, { useEffect } from 'react'

import { Navigate } from 'react-router-dom'
import { Typography, Box, Divider } from '@mui/material'

import useActions from 'hooks/useActions'

import InstUpdateAccessButton from 'pages/Instruction/button'
import authTokenHandler from 'redux/reducers/auth/authStorage'
import StarList from 'components/starList'

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
          sx={{
            margin: "0 0 10px 0"
          }}
        >
          Приветствую Вас, мои волшебники !
        </Typography>
        <Typography
          sx={{
            margin: "0 0 10px 0"
          }}
        >
          Поздравляю Вас, вы приобрели этот курс и не пожалеете об этом, это не
          будет легкая прогулка по парку, Вам прилется боротсья за себя.
        </Typography>
        <Typography
          sx={{
            margin: "0 0 10px 0"
          }}
        >
          Этот курс заставит Вас думать, анализировать и работать над собой. Но Я и не
          говорила, что будет легко. Я лишь обещала открыть правду.
        </Typography>
        <Typography
        >
          <strong>Очень важно завести блокнот и писать от руки</strong>, таким образом будет
          происходить более глубокое погружение в материал, и вообще возьмите
          себе за привычку, если вы хотите усвоить какой то материал пишите конспект.
        </Typography>
        <Divider sx={{ margin: '20px' }} />
        <Typography
          sx={{
            margin: "0 0 10px 0"
          }}
        >
          Каждый день начинается с вводного теоретического блока и продолжается практическими упражнениями,
          направленными на улучшение финансового положения, работу с материальными целями и увеличением уровня дохода.
          Таким образом мы с вами применяем и отрабатываем теоретические знания в реальной жизни.
        </Typography>
        <Typography
          sx={{
            margin: "0 0 10px 0"
          }}
        >
          В конце каждого дня вас ожидает EXTRA задание на проработку денежных блоков.
          Это упражнение поможет вам перестать бояться больших сумм, понять, что вы достойны любых покупок
          и начать визуализировать свои глобальные мечты.
        </Typography>
        <Typography
          sx={{
            margin: "0 0 10px 0"
          }}
        >
          В extra задании я каждый день буду называть вам сумму денег,
          ваша задача будет состоять в том, что бы подумать какие вещи вы хотите купить.
          И найти изображения этих вещей в интернете. Общая стоимость вещей на этих изображениях
          должна быть примерно равна той сумме денег которую я буду задавать в каждом extra задании.
        </Typography>
        <Typography
        >
          Так же иногда будут еще бонусные задания.(додумать)
        </Typography>
        <Divider sx={{ margin: '20px' }} />
      </Box>
      <StarList />
      <InstUpdateAccessButton />
    </Box>
    /* eslint-enable */
  )
}

export default Instruction
