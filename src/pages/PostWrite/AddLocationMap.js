import { useEffect, useRef, useCallback } from 'react'
import styled from '@emotion/styled'
import SnowmanMarker from '../../assets/map/SnowmanMarker.png'
import CurrentLocationLoad from '../../assets/map/CurrentLocationLoad.png'
import { useDispatch, useSelector} from 'react-redux'
import { setPostLocation, getMap } from '../../redux/mapSlice'

const MapContainer = () => {
  const dispatch = useDispatch()
  const mapElementRef = useRef(null);
  const map = useSelector((state) => state.postMap.data.map)

  useEffect(() => {
    dispatch(getMap(mapElementRef.current))
  }, [dispatch])

  const dragendHandler = useCallback(() => {
    const latlng = map.getCenter();
    let lat = latlng.getLat()
    let lng = latlng.getLng()   

    const geocoder = new window.kakao.maps.services.Geocoder()
    geocoder.coord2Address(lng, lat, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const fullAddress = result[0].address.address_name
        dispatch(setPostLocation({lat: lat, lng: lng, address: fullAddress}))
      }
    })
  }, [map, dispatch])

  useEffect( () => {
    if (map) {
      window.kakao.maps.event.removeListener(map, 'dragend', dragendHandler);
    }
  }, [map, dragendHandler])

  const handleCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const locPosition = new window.kakao.maps.LatLng(lat, lng)
  
        // 맵 이동
        map.setCenter(locPosition);
  
        // 주소 가져오기
        const geocoder = new window.kakao.maps.services.Geocoder()
        geocoder.coord2Address(lng, lat, (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const fullAddress = result[0].address.address_name
            // 주소 및 위치 정보 저장
            dispatch(setPostLocation({lat: lat, lng: lng, address: fullAddress}))
          }
        });
      }
    )
  }

  return (
    <>
      <MapContainerWrap>
        <Map id='KakaoMap' ref={mapElementRef}></Map>
        <SnowmanMarkerImg src={SnowmanMarker} alt='눈사람 지도 마커 이미지' />
        <CurrentLocationBtn src={CurrentLocationLoad} alt='현재 위치 불러오기' onClick={()=> handleCurrentPosition()}/>
      </MapContainerWrap>
    </>
  )
}

const MapContainerWrap = styled.section`
  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);
  height:60vh;
  border-radius:10px;
  position:relative;
`
const Map = styled.div`
  width:100%;
  height:100%;
`

const SnowmanMarkerImg = styled.img`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -100%);
  z-index:1;
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.25));
  width: 50px;
`

const CurrentLocationBtn = styled.img`
  position:absolute;
  z-index:1;
  bottom: 0;
  right: 0;
`

export default MapContainer