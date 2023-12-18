import { useEffect } from 'react'
import styled from '@emotion/styled'
import SnowmanMarker from '../../assets/map/SnowmanMarker.png'
import { useDispatch } from 'react-redux'
import { setMapCenter } from '../../redux/mapSlice'

const MapContainer = () => {
  const dispatch = useDispatch()

  const { kakao } = window;

  useEffect(() => {
    const container = document.getElementById('KakaoMap');
    let options = {
      center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    const dragendHandler = () => {
      const latlng = map.getCenter();
      let lat = latlng.getLat()
      let lng = latlng.getLng()   
      
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.coord2Address(lng, lat, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const fullAddress = result[0].address.address_name;
          dispatch(setMapCenter({
            address: fullAddress,
          }))
        } else {
          console.error('주소 변환 실패');
        }
      });
    };

     // 이벤트 리스너 등록
     kakao.maps.event.addListener(map, 'dragend', dragendHandler);

     // 컴포넌트 언마운트 시 이벤트 리스너 해제
     return () => {
       kakao.maps.event.removeListener(map, 'dragend', dragendHandler);
     };
    // createMap()
  }, []);

  // const createMap = () => {
  //   const container = document.getElementById('KakaoMap');
  //   let options = {
  //     center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
  //     level: 5,
  //   };
  //   //map
  //   const map = new kakao.maps.Map(container, options);
  // };
  

  return (
    <>
      <MapContainerWrap>
        <Map id='KakaoMap'></Map>
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
export default MapContainer