/*global kakao*/ 
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import kakaoMapImage from '../../assets/main/box.png'

const Location=()=>{
	useEffect(()=>{
	var container = document.getElementById('map');
	var options = {
			center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
			level: 3
	};
	var map = new kakao.maps.Map(container, options);
	var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
	var marker = new kakao.maps.Marker({
			position: markerPosition
	});
	marker.setMap(map);
	}, [])

	return (
		<div>
		<div id="map" style={{ width: "405px", height: "400px" }}></div>
		<div style={{ display: 'flex', alignItems: 'center',justifyContent: 'flex-end' }}>
			<Link to='/main'>
				<button style={{ marginBottom: '10px', color: 'red', fontWeight: 'bold' }}>
						내 정보 보기
				</button>
			</Link>
			<img src={kakaoMapImage} alt='카카오 맵 핀' style={{ width: '140px', height: '50px' }} />
		</div>
		</div>
	);
}

export default Location;