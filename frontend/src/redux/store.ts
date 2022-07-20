import { configureStore, combineReducers } from '@reduxjs/toolkit'
import articleReducer from 'redux/articleReducer'

const RootReducer = combineReducers({
  articleReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: RootReducer
  })
}
export type RootState = ReturnType<typeof RootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
