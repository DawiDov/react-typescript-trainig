import { PayloadAction } from '@reduxjs/toolkit'

const initialState = {}

interface defaultActionType {
  type: string
}

const defaultAction: defaultActionType = {
  type: 'wer',
}
const mainReducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
    default:
      return {
        ...state
      }
  }
}

export default mainReducer
