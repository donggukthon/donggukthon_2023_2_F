import { configureStore } from '@reduxjs/toolkit'
import postSlice from './postSlice'
import commentSlice from './commentSlice'
import mapSlice from './mapSlice'

export const store = configureStore({
  reducer: {
    post: postSlice,
    comment: commentSlice,
    postMap: mapSlice,
  },
})

store.subscribe(() => {
  console.log('Redux 상태 변화:', store.getState());
});

export default store