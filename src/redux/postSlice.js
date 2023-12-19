import { createSlice } from '@reduxjs/toolkit'
import imgInit from '../assets/bg/imgInit.png'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    imageSrc: imgInit,
    textContents: {
      title: '',
      contents: '',
    },
  },
  reducers: {
    setImageSrc: (state, action) => {
      state.imageSrc = action.payload;
    },
    setTextContents: (state, action) => {
      state.textContents.title = action.payload.title;
      state.textContents.contents = action.payload.contents;
    },
    setPostDate:(state, action) =>{
      state.postDate = action.payload;
    },
  },
});

export const { setImageSrc, setTextContents, setPostDate } = postSlice.actions;
export default postSlice.reducer;