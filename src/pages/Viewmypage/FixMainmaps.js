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
import { ACCESS_TOKEN } from '../../utils/api';
const Mainmaps = () => {


return (
    <>
        <Header />
            <PostBg>
                <PostBg1>
                    <MapContainer>
                    <Map
                        center={{ lat: 33.5563, lng: 126.79581 }}
                    style={{ width: "100%", height: "360px" }}
                    >
                    <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                        <div style={{color:"#000"}}>Hello World!</div>
                    </MapMarker>
                    </Map>
                    </MapContainer>

                    <ContentContainer>
                        <Link to="/main">
                            <button style={{ marginBottom: '10px', color: 'red', fontWeight: 'bold' }}>
                            </button>
                            <div>
                                <button onClick={moveToCurrentLocation}></button>
                            </div>

                        </Link>
                        {
                            (
                                ACCESS_TOKEN === undefined? 
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
                                ACCESS_TOKEN === undefined ? 
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
                                <img src={location} alt="Location" onClick={moveToCurrentLocation} />
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