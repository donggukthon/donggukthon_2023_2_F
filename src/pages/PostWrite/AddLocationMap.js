import { useEffect, useRef, useCallback, useState } from 'react'
import styled from '@emotion/styled'
import SnowmanMarker from '../../assets/map/SnowmanMarker.png'
import CurrentLocationLoad from '../../assets/map/CurrentLocationLoad.png'
import { useDispatch, useSelector} from 'react-redux'
import { setPostLocation } from '../../redux/mapSlice'

const MapContainer = () => {
  const [map, setMap] = useState(null)

  const dispatch = useDispatch()
  const mapElementRef = useRef(null);

  useEffect(() => {
    console.log("start to load kakao maps api")
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=ad72385a83fbad8abbd735a1f9473931&autoload=false";
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
         // 최초 위치
          const location = new window.kakao.maps.LatLng(
            37.56682420267543,
            126.978652258823
          );

          const options = {
            center: location,
            level: 3,
          };

          const map = new window.kakao.maps.Map(mapElementRef.current, options);
          // const places = new window.kakao.maps.services.Places(map);
          // const geocoder = new window.kakao.maps.services.Geocoder();

          setMap(map);
      });
    }

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);

    return () => kakaoMapScript.remove();
  }, [dispatch])

  const dragendHandler = useCallback(() => {
    if(!map) {
      alert("map 객체가 아직 생성되지 않았습니다!")
      return;
    }

    const latlng = map.getCenter();
    let lat = latlng.getLat()
    let lng = latlng.getLng()   

    console.log(`lat : ${lat}, lng : ${lng}`)

    // const geocoder = new window.kakao.maps.services.Geocoder()
    // geocoder.coord2Address(lng, lat, (result, status) => {
    //   if (status === window.kakao.maps.services.Status.OK) {
    //     const fullAddress = result[0].address.address_name
    //     dispatch(setPostLocation({lat: lat, lng: lng, address: fullAddress}))
    //   }
    // })
  }, [map])

  useEffect( () => {
    if (map) {
      window.kakao.maps.event.addListener(map, 'dragend', dragendHandler);
    }
  }, [map, dragendHandler])

  const handleCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const locPosition = new window.kakao.maps.LatLng(lat, lng)
  
        // 맵 이동
        map.panTo(locPosition);

        console.log("move to my current loaction!");
  
        // 주소 가져오기
        // const geocoder = new window.kakao.maps.services.Geocoder()
        // geocoder.coord2Address(lng, lat, (result, status) => {
        //   if (status === window.kakao.maps.services.Status.OK) {
        //     const fullAddress = result[0].address.address_name
        //     // 주소 및 위치 정보 저장
        //     dispatch(setPostLocation({lat: lat, lng: lng, address: fullAddress}))
        //   }
        // });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  return (
    <>
      <MapContainerWrap>
        <Map id='KakaoMap' ref={mapElementRef}></Map>
        <SnowmanMarkerImg src={SnowmanMarker} alt='눈사람 지도 마커 이미지' />
        <CurrentLocationBtn src={CurrentLocationLoad} alt='현재 위치 불러오기' onClick={handleCurrentPosition}/>
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