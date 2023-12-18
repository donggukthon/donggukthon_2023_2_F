/*global kakao*/ 
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
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
        <div>
            <Link to='/main'>
            <button style={{ marginBottom: '10px', color: 'red', fontWeight: 'bold' }}>
                내 정보 보기
            </button>
            </Link>
        </div>
        </div>
    );

}

export default Location;