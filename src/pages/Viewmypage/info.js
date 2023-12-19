import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/main/mainbackgroudimg.png';
import backgroundImage1 from '../../assets/main/cutesnowman.png';
import logoImage from '../../assets/main/mainlogo.png';  // 이미지 경로 추가
import styled, { keyframes } from 'styled-components';
import Header from '../../components/Layout/Header';
import Cloud from '../../assets/bg/Cloud.png'

const Hello = () => {
const navigate = useNavigate();

const handleClick = () => {
    // 클릭 시 이동할 경로를 지정합니다 ('/see'로 수정)
    navigate('/');
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
    cursor: pointer;
    position: relative;  /* 상대적 위치 지정 */
`;


const StyledParagraph = styled.p`
    color: white;
    font-size: 2em;
    text-align: center;
`;

const Logo = styled.img`
position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);
width: 400px;  /* 로고의 가로 크기 조절 */
height: auto;  /* 높이 자동 조절 */
`;

const Logo2 = styled.img`
position: absolute;
top: 80%;
left: 50%;
transform: translate(-50%, -50%);
width: 600px;  /* 로고의 가로 크기 조절 */
height: auto;  /* 높이 자동 조절 */
`;
return (
    <>
    <Header/>
    <PostBg onClick={handleClick}>
    <Logo src={logoImage} alt="Logo" />
        <StyledParagraph>
            
        <br />
        <br />
        <br />
        다른 눈사람 보기를 클릭해서
        <br />
        내 주위의 눈사람을 찾아보세요!
        </StyledParagraph>
    <Logo2 src={backgroundImage1} alt="Logo" />
    </PostBg>
    <BottomCloud src={Cloud} alt='구름 배경화면' />

    </>
);
};

const BottomCloud = styled.img`
    position: absolute;
    bottom: -3%;
    width: 100%;
    z-index: 1;
`;
export default Hello;
