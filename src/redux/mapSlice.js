import { createSlice } from '@reduxjs/toolkit'

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    lat: '',
    lng: '',
    address: '',
  },
  reducers: {
    setMap: (state, action) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
      state.address = action.payload.address;
    },
  },
});

export const { setMap } = mapSlice.actions;
export default mapSlice.reducer;