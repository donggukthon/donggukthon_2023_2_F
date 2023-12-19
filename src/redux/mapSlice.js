import { createSlice } from '@reduxjs/toolkit'

export const getMap = (element) => {
  return async (dispatch) => {
    if (window.navigator) {
      // 최초 위치
      const location = new window.kakao.maps.LatLng(
        37.56682420267543,
        126.978652258823
      );

      const options = {
        center: location,
        level: 3,
      };

      const map = await new window.kakao.maps.Map(element, options);
      const places = new window.kakao.maps.services.Places(map);
      const geocoder = new window.kakao.maps.services.Geocoder();

      dispatch(setPostLocation({ map, places, geocoder }, location));
    } 
  }
}

export const mapSlice = createSlice({
  name: 'postMap',
  initialState: {
    data: { map: {}, places: {}, geocoder: {} },
    dragPosition: { lat: null, lng: null, address: null }
  },
  reducers: {
    setPostLocation: (state, action) => {
      state.data = action.payload;
      state.dragPosition = action.payload;
    },
  },
});

export const { setPostLocation } = mapSlice.actions;
export default mapSlice.reducer;