import React from 'react'
import { useTypedSelector } from 'redux/store'
import { Box, Typography } from '@mui/material'
import setInnerHTML from 'utils/SetInnerHTML'

const BonusContent: React.FC = () => {
  const { bonusContent } = useTypedSelector((state) => state.bonusReducer)

  return (
    <Box component="div">
      <Typography
        align="center"
        variant="h6"
        sx={{
          padding: '0 0 20px 0',
        }}>
        {bonusContent && bonusContent.title}
      </Typography>
      <Typography>
        {bonusContent && (
          <div
            dangerouslySetInnerHTML={setInnerHTML(bonusContent.text_bonus)}
          />
        )}
      </Typography>
      {bonusContent?.pdf && (
        <Typography>
          Скачать или посмотреть можно <a href={bonusContent.pdf}>ТУТ</a>
        </Typography>
      )}
      {bonusContent?.meditation && (
        <Box
          sx={{
            textAlign: 'center',
            margin: '0 0 20px 0',
          }}>
          <Typography sx={{ display: 'block', margin: '0 0 20px 0' }}>
            Как правильно медитировать:{' '}
            <a href="https://drive.google.com/file/d/1q8Q8ef7aztCjjlhxOKpHQ5vASJdWtBS7/view?usp=sharing">
              Скачать
            </a>
          </Typography>
          <audio controls>
            <source src={bonusContent.meditation} type="audio/mpeg" />
            <track default kind="captions" src="meditation" />
            Ваш браузер не поддерживает воспроизведение!
          </audio>
          <p>Для скачивания нажмите на 3 точки справа и download</p>
        </Box>
      )}
    </Box>
  )
}

export default BonusContent
