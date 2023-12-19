import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/main/mainbackgroudimg.png';
import backgroundImage1 from '../../assets/main/cutesnowman.png';
import styled from '@emotion/styled'
import {keyframes} from '@emotion/react'

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
    background-size: 55%;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${snowfallAnimation} 5s linear infinite;
    cursor: pointer;
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
    background-position: center 80%;
`;

const StyledParagraph = styled.p`
    color: white;
    font-size: 2em;
    text-align: center;
`;

return (
    <PostBg onClick={handleClick}>
    <PostBg1>
        <StyledParagraph>
        로고가 들어가야하는 자리 !
        <br />
        <br />
        <br />
        다른 눈사람 보기를 클릭해서
        <br />
        내 주위의 눈사람을 찾아보세요!
        </StyledParagraph>
    </PostBg1>
    </PostBg>
);
};

export default Hello;
