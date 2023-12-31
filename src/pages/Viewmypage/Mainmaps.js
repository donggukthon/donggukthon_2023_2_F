/*global kakao*/
import Header from '../../components/Layout/Header'
import React, { useCallback, useEffect, } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import box from '../../assets/main/box.png';
import backgroundImage from '../../assets/main/mainbackgroudimg.png';
import backgroundImage1 from '../../assets/main/Group_713.png';
import cloud from '../../assets/bg/Cloud.png'
import home from '../../assets/main/home.png'
import location from '../../assets/main/mylocation.png'
import styled from '@emotion/styled'
import {keyframes} from '@emotion/react'
import { ACCESS_TOKEN } from '../../utils/api';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

const Mainmaps = () => {
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

    // var imageSrc = '/cutesnowman.png';
    // var imageSize = new window.kakao.maps.Size(64, 69);
    // var imageOption = { offset: new window.kakao.maps.Point(27, 69) };
    // var positions = [
    //     {
    //         title: '떙떙이',
    //         latlng: new window.kakao.maps.LatLng(37.558050, 127.003027),
    //     },
    //     {
    //         title: '만해광장눈사람',
    //         latlng: new window.kakao.maps.LatLng(37.5582666, 127.0001641),
    //     },
    //     {
    //         title: '원흥광눈사람',
    //         latlng: new window.kakao.maps.LatLng(37.559059, 126.998828),
    //     },
    //     {
    //         title: '그냥눈사람',
    //         latlng: new window.kakao.maps.LatLng(37.558514, 127.0019862),
    //     },
    //     {
    //         title: '나곧녹냐',
    //         latlng: new window.kakao.maps.LatLng(37.5567124,127.000786),
    //     },
    // ];

    // positions.forEach((position) => {
    //     var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    //     var marker = new window.kakao.maps.Marker({
    //         map: map,
    //         position: position.latlng,
    //         title: position.title,
    //         image: markerImage,
    //     });
    // });

// const moveToCurrentLocation = (event) => {
//     event.preventDefault();

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//         function (position) {
//             const lat = position.coords.latitude;
//             const lon = position.coords.longitude;
//             map.setCenter(new window.kakao.maps.LatLng(lat, lon));
//         },
//         function (error) {
//             console.error('Error getting user location:', error);
//         }
//         );
//     } else {
//         console.error('Geolocation is not supported in this browser.');
//     }
//     };

// // Declare 'map' outside the useEffect scope
// let map;

// const { kakao } = window;

// useEffect(() => {

    






    // var container = document.getElementById('map');
    // var options = {
    // center: new window.kakao.maps.LatLng(37.55773506, 127.0019409),
    // level: 3,
    // };

    // // Assign 'map' here
    // map = new window.kakao.maps.Map(container, options);

    

    // marker.setMap(map);

    // kakao.maps.event.addListener(marker, 'click', function () {
    //     alert(position.title);
    // });
    // });
// }, []);

console.log(ACCESS_TOKEN)

return (
    <>
            <Header />
            <PostBg>
                <PostBg1>
                    <MapContainer>
                        <div id="map" ref={mapElementRef} style={{ width: '300px', height: '500px' }}></div>
                    </MapContainer>

                    <ContentContainer>
                        <Link to="/main">
                            <button style={{ marginBottom: '10px', color: 'red', fontWeight: 'bold' }}>
                            </button>
                            <div>
                                <button></button>
                            </div>

                        </Link>
                        {
                            (
                                ACCESS_TOKEN != 'undefined'? 
                                <Link to="/post/photo">
                                    <BoxImageContainer>
                                        <BoxImage src={box} alt="box" />
                                        <WhiteText>내 눈사람 등록하기</WhiteText>
                                    </BoxImageContainer>    
                                </Link>
                                : 
                                <Link to="/login">
                                    <BoxImageContainer>
                                        <BoxImage src={box} alt="box" />
                                        <WhiteText>내 눈사람 등록하기</WhiteText>
                                    </BoxImageContainer>    
                                </Link>
                            )
                        } 
                        {
                            (
                                ACCESS_TOKEN != 'undefined' ? 
                                <Link to="/mypage">
                                    <BoxImageContainer1>
                                        <img src={home}/>
                                    </BoxImageContainer1>
                                </Link>
                                : 
                                <Link to="/login">
                                    <BoxImageContainer1>
                                        <img src={home}/>
                                    </BoxImageContainer1>
                                </Link>
                            )
                        }


                        <BoxImageContainer2>
                                <img src={location} alt="Location"  />
                        </BoxImageContainer2>
                    </ContentContainer>
                </PostBg1>
            </PostBg>

            <Cloud src={cloud} alt='구름 배경화면' />
        </>
);
};

const snowfallAnimation = keyframes`
	0% {
	background-position: center bottom;
	}
	100% {
	background-position: center top;
	}
`;

const PostBg = styled.div`
padding: 0 24px;
background: url(${backgroundImage}) no-repeat center center fixed;
background-size: 200%;
background-position: center;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
animation: ${snowfallAnimation} 10s linear infinite;
`;

const PostBg1 = styled.div`
padding: 0 80px;
background: url(${backgroundImage1}) no-repeat center center fixed;
background-size: 90%;
height: 200vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`;

const MapContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px; /* 높이를 조절하세요 */
    width: 500px;
    margin-top: -80px; /* 추가: 필요한 경우 조절하세요 */
`;

const ContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
`;

const BoxImageContainer = styled.div`
    position: absolute;
    right: -200px; /* 오른쪽 여백 조절 */
    top: 500%;
    transform: translateY(-50%);
    z-index:2;
`;
const BoxImageContainer1 = styled.div`
    position: absolute;
    right: -50px; /* 오른쪽 여백 조절 */
    top: 500%;
    transform: translateY(-50%);
    z-index:2;
`;
const BoxImageContainer2 = styled.div`
    position: absolute;
    left: -150px; /* 오른쪽 여백 조절 */
    top: 500%;
    transform: translateY(-50%);
    z-index:2;
`;



const BoxImage = styled.img`
width: 140px;
height: 50px;
`;

const WhiteText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 16px;
    white-space: nowrap; /* 텍스트가 한 줄에 나타나도록 설정 */
`;

const Cloud = styled.img`
position:absolute;
bottom:0;
bottom: -10%;
width: 200%;
z-index:1;
`
export default Mainmaps;