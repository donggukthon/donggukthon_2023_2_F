import { configureStore } from '@reduxjs/toolkit'
import postSlice from './postSlice'
import commentSlice from './commentSlice'

export const store = configureStore({
  reducer: {
    post: postSlice,
    comment: commentSlice
  },
})

export default store