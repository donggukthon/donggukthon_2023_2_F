import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    imageSrc: null,
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
    }
  },
});

export const { setImageSrc, setTextContents, setPostDate } = postSlice.actions;
export default postSlice.reducer;