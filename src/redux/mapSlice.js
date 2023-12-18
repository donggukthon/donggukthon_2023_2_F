import { createSlice } from '@reduxjs/toolkit'

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    mapCenter:  { lat: 0, lng: 0 }
  },
  reducers: {
    setMapCenter: (state, action) => {
      state.mapCenter = action.payload;
    },
  },
});

export const { setMapCenter } = mapSlice.actions;
export default mapSlice.reducer;