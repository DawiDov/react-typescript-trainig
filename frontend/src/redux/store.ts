import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'

import mainReducer from './mainReducer'

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
  middleware: new MiddlewareArray().contact(additionalMiddleware, logger)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// For then using it wherever you'd call Dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
