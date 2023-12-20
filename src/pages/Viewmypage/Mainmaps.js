/*global kakao*/
import Header from '../../components/Layout/Header'
import React, { useEffect } from 'react';
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
const Mainmaps = () => {

const moveToCurrentLocation = (event) => {
    event.preventDefault();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            map.setCenter(new kakao.maps.LatLng(lat, lon));
        },
        function (error) {
            console.error('Error getting user location:', error);
        }
        );
    } else {
        console.error('Geolocation is not supported in this browser.');
    }
    };

// Declare 'map' outside the useEffect scope
let map;

useEffect(() => {
    var container = document.getElementById('map');
    var options = {
    center: new kakao.maps.LatLng(37.55773506, 127.0019409),
    level: 3,
    };
    
    // Assign 'map' here
    map = new kakao.maps.Map(container, options);

    var imageSrc = '/snowpin.png';
    var imageSize = new kakao.maps.Size(64, 69);
    var imageOption = { offset: new kakao.maps.Point(27, 69) };
    var positions = [
        {
            title: '떙떙이',
            latlng: new kakao.maps.LatLng(37.558050, 127.003027),
        },
        {
            title: '만해광장눈사람',
            latlng: new kakao.maps.LatLng(37.5582666, 127.0001641),
        },
        {
            title: '원흥광눈사람',
            latlng: new kakao.maps.LatLng(37.559059, 126.998828),
        },
        {
            title: '그냥눈사람',
            latlng: new kakao.maps.LatLng(37.558514, 127.0019862),
        },
        {
            title: '나곧녹냐',
            latlng: new kakao.maps.LatLng(37.5567124,127.000786),
        },
    ];

    positions.forEach((position) => {
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    var marker = new kakao.maps.Marker({
        map: map,
        position: position.latlng,
        title: position.title,
        image: markerImage,
    });

    marker.setMap(map);

    kakao.maps.event.addListener(marker, 'click', function () {
        window.location.href = '/click';
    });
    });
}, []);

return (
    <>
		<Header />
		<PostBg>
				<PostBg1>
						<MapContainer>
								<div id="map" style={{ width: '300px', height: '500px' }}></div>
						</MapContainer>

                    <ContentContainer>
                        <Link to="/main">
                            <button style={{ marginBottom: '10px', color: 'red', fontWeight: 'bold' }}>
                                내 정보 보기
                            </button>
                        </Link>
                        <Link to="/post/photo">
                        <BoxImageContainer>
                            <BoxImage src={box} alt="box" />
                            <WhiteText>내 눈사람 등록하기</WhiteText>
                        </BoxImageContainer>
                        </Link>
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
height: calc(var(--vh, 1vh) * 100);100vh;
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



