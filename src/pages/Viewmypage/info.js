import React from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundImage from '../../assets/main/mainbackgroudimg.png'
import SnowmanDrawImg from '../../assets/bg/SnowmanMainBg.png'
import logoImg from '../../assets/logo.png'  // 이미지 경로 추가
import Header from '../../components/Layout/Header'
import Cloud from '../../assets/bg/Cloud.png'
import styled from '@emotion/styled'
import {keyframes} from '@emotion/react'
import { common } from '../../styles/Common'
import { Link } from 'react-router-dom'

const Hello = () => {
return (
	<>
	<Header/>
		<PostBg>
			<Logo src={logoImg} alt="Logo" />
			<StyledParagraph>
			다른 눈사람 보기를 클릭해서<br/>
			내 주위의 눈사람을 찾아보세요!
			</StyledParagraph>
			<SnowmanImg>
				<Link to='/'><span>화면을 클릭해주세요.</span></Link>
				<img src={SnowmanDrawImg} alt="Logo" />
			</SnowmanImg>
		</PostBg>
	<BottomCloud>
		<img src={Cloud} alt='구름 배경화면' />
	</BottomCloud> 
	</>
);
};

const BottomCloud = styled.div`
	position: absolute;
	bottom: 0;
	height:50px;
	background:${common.colors.white};
`

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
	height: calc(var(--vh, 1vh) * 100);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	animation: ${snowfallAnimation} 10s linear infinite;
	cursor: pointer;
	position: relative;
`;


const StyledParagraph = styled.p`
	color: ${common.colors.pink};
	font-size: ${common.fontSize.fz20};
	text-align: center;
	line-height:1.2;
`;

const Logo = styled.img`
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400px; 
	height: auto; 
`;

const SnowmanImg = styled.div`
	position:fixed;
	bottom:0;
	font-size:${common.fontSize.fz16};
	text-decoration:underline;
	z-index:1;
	span{
		position:absolute;
		left:50%;
		transform:translateX(-50%);
		bottom:10%;
	}
	img{
		width:100%;
	}
`;
export default Hello;
