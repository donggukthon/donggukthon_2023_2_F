import { useEffect } from 'react'
import styled from '@emotion/styled'
import SnowmanMarker from '../../assets/map/SnowmanMarker.png'

const MapContainer = () => {
  const { kakao } = window;

  useEffect(() => {
    createMap()
  }, []);

  const createMap = () => {
    const container = document.getElementById('KakaoMap');
    let options = {
      center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);
  };

  return (
    <>
      <MapContainerWrap>
        <div id='KakaoMap'></div>
        <SnowmanMarkerImg src={SnowmanMarker} alt='지도 마커' />
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

const SnowmanMarkerImg = styled.img`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -100%);
  z-index:1;
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.25));
  width: 50px;
`
export default MapContainer