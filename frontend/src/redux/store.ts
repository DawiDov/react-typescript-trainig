import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  AnyAction,
} from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import reducers from 'redux/reducers'

// Setup Redux Devtools
declare global {
  // eslint-disable-next-line
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store
const rootReducer = combineReducers(reducers)
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
)

// Types
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>

// Typed Hooks
export const useTypedDispatch = () => useDispatch<TypedDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
