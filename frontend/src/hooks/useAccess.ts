import { useTypedSelector } from 'redux/store'

const useAccess = (pk: number) => {
  const { article } = useTypedSelector((state) => ({
    article: state.articlesReducer.articleAccess,
  }))

  if (+pk === 1) return article?.article_1
  if (+pk === 2) return article?.article_2
  if (+pk === 3) return article?.article_3
  if (+pk === 4) return article?.article_4
  if (+pk === 5) return article?.article_5
  if (+pk === 6) return article?.article_6
  if (+pk === 7) return article?.article_7
  if (+pk === 8) return article?.article_8
  if (+pk === 9) return article?.article_9
  if (+pk === 10) return article?.article_10
  if (+pk === 11) return article?.article_11
  if (+pk === 12) return article?.article_12
  if (+pk === 13) return article?.article_13
  if (+pk === 14) return article?.article_14
  if (+pk === 15) return article?.article_15
  if (+pk === 16) return article?.article_16
  if (+pk === 17) return article?.article_17
  if (+pk === 18) return article?.article_18
  if (+pk === 19) return article?.article_19
  if (+pk === 20) return article?.article_20

  return pk
}

export default useAccess
