import { configureStore } from '@reduxjs/toolkit'
import articleReducer from 'redux/articleReducer'

export const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
})
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
