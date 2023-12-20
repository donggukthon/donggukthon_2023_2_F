import { createSlice } from '@reduxjs/toolkit'

export const postIdSlice = createSlice({
  name: 'postId',
  initialState: {
    id: ''
  },
  reducers: {
    setPostId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPostId } = postIdSlice.actions;
export default postIdSlice.reducer;