/*global kakao*/ 
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import kakaoMapImage from '/Users/nam/Desktop/notmine/snowman1218/donggukthon_2023_2_F/src/box.png'; // 이미지 경로 설정
var positions = [
    {
        title: '카카오', 
        latlng: new kakao.maps.LatLng(33.450705, 126.570677)
    },
    {
        title: '생태연못', 
        latlng: new kakao.maps.LatLng(33.450936, 126.569477)
    },
    {
        title: '텃밭', 
        latlng: new kakao.maps.LatLng(33.450879, 126.569940)
    },
    {
        title: '근린공원',
        latlng: new kakao.maps.LatLng(33.451393, 126.570738)
    }
];
const Location = () => {
    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(33.450705, 126.570677),
            level: 10
        };
        var map = new kakao.maps.Map(container, options);

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

        for (var i = 0; i < positions.length; i++) {
            // 마커 이미지의 이미지 크기입니다
            var imageSize = new kakao.maps.Size(30, 30);

            // 마커 이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: positions[i].latlng,
                title: positions[i].title,
                image: markerImage
            });

            // 마커에 클릭 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function () {
                alert('마커 클릭됨');
            });
        }
    }, [])

    return (
        <div>
            <div id="map" style={{ width: "405px", height: "400px" }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to='/main'>
                    <button style={{ marginBottom: '50px', color: 'red', fontWeight: 'bold' }}>
                        내 정보 보기
                    </button>
                </Link>
                <img src={kakaoMapImage} style={{ width: '150px', height: '50px' }} />
            </div>
        </div>
    );
}

export default Location;
