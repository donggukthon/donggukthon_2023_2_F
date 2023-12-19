import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import SnowmanMarker from '../../assets/map/SnowmanMarker.png'
import CurrentLocationLoad from '../../assets/map/CurrentLocationLoad.png'
import { useDispatch } from 'react-redux'
import { getMap } from '../../redux/mapSlice'

const MapContainer = () => {
  const dispatch = useDispatch()
  const mapElementRef = useRef(null);

  useEffect(() => {
    dispatch(getMap(mapElementRef.current))
  }, [dispatch]);
  
  return (
    <>
      <MapContainerWrap>
        <Map id='KakaoMap' ref={mapElementRef}></Map>
        <SnowmanMarkerImg src={SnowmanMarker} alt='눈사람 지도 마커 이미지' />
        <CurrentLocationBtn src={CurrentLocationLoad} alt='현재 위치 불러오기'/>
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