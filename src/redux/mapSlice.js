import { createSlice } from '@reduxjs/toolkit'

export const mapSlice = createSlice({
  name: 'postMap',
  initialState: {
    data: { map: {}, places: {}, geocoder: {} },
  },
  reducers: {
    setPostLocation: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setPostLocation } = mapSlice.actions;
export default mapSlice.reducer;