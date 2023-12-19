/*global kakao*/
import Header from '../../components/Layout/Header'
import { common } from '../../styles/Common';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import box from '../../assets/main/box.png';
import backgroundImage from '../../assets/main/mainbackgroudimg.png';
import backgroundImage1 from '../../assets/main/Group_713.png';
import { styled, keyframes } from 'styled-components';

const Mainmaps = () => {
	const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
	const openBottomSheet = () => {
		setBottomSheetOpen(true);
	};
	
	const closeBottomSheet = () => {
		setBottomSheetOpen(false);
	};
	useEffect(() => {
		var container = document.getElementById('map');
		var options = {
		center: new kakao.maps.LatLng(33.450705, 126.570677),
		level: 3,
		};
		var map = new kakao.maps.Map(container, options);
	
		// 마커 이미지의 이미지 주소
	
		var imageSrc = '/src/assets/main/snowpin.png', // 마커이미지의 주소입니다    
		imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
		imageOption = {offset: new kakao.maps.Point(27, 69)};
	
		var positions = [
		{
			title: '카카오',
			latlng: new kakao.maps.LatLng(33.450705, 126.570677),
		},
		];
	
		positions.forEach((position) => {
		// 마커 이미지 생성
		var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
		// 마커 생성
		var marker = new kakao.maps.Marker({
			map: map,
			position: position.latlng,
			title: position.title,
			image: markerImage,
		});
	
		// 마커에 클릭 이벤트 추가
		kakao.maps.event.addListener(marker, 'click', function () {
			alert(position.title);
		});
		});
	}, []);

return (
    <>
    <Header/>
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
		<div>
		<button onClick={openBottomSheet}>바텀 시트 열기</button>
		</div>
		<BoxImageContainer>
			<BoxImage src={box} alt="box" />
			<WhiteText>내 눈사람 등록하기</WhiteText>
		</BoxImageContainer>
		</ContentContainer>
	</PostBg1>
	</PostBg>
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
background-size: 55%;
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
background-size: 50%;
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
height: 617px;
width: 500px;
`;

const ContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
`;

const BoxImageContainer = styled.div`
position: relative;
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
`;

export default Mainmaps;