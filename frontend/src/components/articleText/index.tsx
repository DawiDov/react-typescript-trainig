import React from 'react'
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material'
import { useTypedSelector } from 'redux/store'
import setInnerHTML from 'utils/SetInnerHTML'

const ArticleText: React.FC = () => {
  const { articleText } = useTypedSelector((state) => state.articleTextReducer)
  return (
    <Box component="div">
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
      <Box>
        <Divider sx={{ margin: '20px' }} />
        <Typography
          align="center"
          variant="h6"
          sx={{
            padding: '0 0 20px 0',
          }}>
          Extra задание на проработку денежных блоков
        </Typography>
        {articleText?.article_id?.pk === 1 && (
          /* eslint-disable */
          <Box sx={{
            margin: '0 0 20px 0'
          }}>
            <Typography
              variant='subtitle2'
              sx={{
                margin: '0 0 15px 0'
              }}>
              Помимо основных заданий, мы также будем выполнять дополнительное
              EXTRA упражнение, которое поможет нам перестать бояться больших
              сумм, понять, что мы достойны любых покупок и начать визуализировать
              свои ГЛОБАЛЬНЫЕ мечты.
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{
                margin: '0 0 15px 0'
              }}>
              В EXTRA задании Я каждый день буду называть Вам сумму денег, Ваша
              задача будет состоять в том, что бы подумать какие вещи Вы хотите
              купить и найти изображения этих вещей в интернете. Общая стоимость
              вещей на этих изображениях должна быть примерно равна той сумме денег
              которую я буду задавать в каждом EXTRA задании.
            </Typography>
          </Box>
          /* eslint-enable */
        )}
        <Typography
          variant="body1"
          sx={{
            margin: '0 0 15px 0',
          }}>
          <strong style={{ fontSize: '20px' }}>Сумма:</strong>{' '}
          <strong style={{ fontSize: '20px' }}>
            {articleText?.extra_task}
          </strong>{' '}
          рублей.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Пошаговая инструкция для задания:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="1. Составить список вещей на сумму которую я назову" />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Находите картинки с вещами из вашего списка" />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. Смотрите на картинки по очереди и представляете как вы покупаете эти вещи" />
          </ListItem>
          <ListItem>
            <ListItemText primary="4. Записываете в блокнот ощущения которые у вас при этом возникают" />
          </ListItem>
          <ListItem>
            <ListItemText primary="5. Если вам психологически что-то мешает, опишите это" />
          </ListItem>
        </List>
      </Box>
      <Divider sx={{ margin: '20px' }} />
    </Box>
  )
}

export default ArticleText
