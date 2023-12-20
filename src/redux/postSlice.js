import { createSlice } from '@reduxjs/toolkit'
import imgInit from '../assets/bg/imgInit.png'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    file:null,
    imageSrc: imgInit,
    textContents: {
      title: '',
      contents: '',
    },
  },
  reducers: {
    setImage: (state, action) => {
      state.imageSrc = action.payload;
    },
    setFile: (state, action) => {
      state.file = action.payload.file;
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

export const { setImage, setTextContents, setPostDate, setFile } = postSlice.actions;
export default postSlice.reducer;