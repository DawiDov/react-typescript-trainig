import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stateType, customPayloadType } from './types'

const initialState: stateType = {
  articles: null,
  count: 0,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<customPayloadType>) => ({
      ...state,
      articles: action.payload.results,
      count: action.payload.count,
    }),
    default: (state) => ({ ...state }),
  },
})

export const { setArticles } = mainSlice.actions

export default mainSlice.reducer
