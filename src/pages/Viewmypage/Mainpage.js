import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/bg/backgroundimage.png';
import Header from '../../components/Layout/Header';
import likeIcon from '../../assets/icon/like.png';
import SeeIcon from '../../assets/icon/see.png';
import StoreIcon from '../../assets/icon/store.png';
import CommentIcon from '../../assets/icon/comment.png';
import Mainbox from '../../assets/main/Mainbox.png';
const MyPageInfo = () => {
	useEffect(()=>{
		const tokenValue = window.location.search.split('=')
		const ACCESS_TOKEN = tokenValue[1]
		localStorage.setItem('access_token', ACCESS_TOKEN)
	},[])
	

return (
	<>
	<Header />
	<PostBg>
		<ContentWrapper>
		<h1>어서와요 사용자님!</h1>
		<h1>만드신 눈사람은 0명이에요!</h1>
		<br></br>
		</ContentWrapper>
		
		<div style={{ margin: '40px 150px 30px 10px' }}>
		<Link to='/see'>
		<LinkWrapper>
			<Icon src={SeeIcon} alt="See icon" />
			<p>내 눈사람 보기</p>
		</LinkWrapper>
		</Link>
		<Link to='/comment'>
		<LinkWrapper>
			<Icon src={CommentIcon} alt="Comment icon" />
			<p>내 댓글 보기</p>
		</LinkWrapper>
		</Link>
		<Link to='/like'>
		<LinkWrapper>
			<Icon src={likeIcon} alt="like icon" />
			<p>좋아요한 게시글 보기</p>
		</LinkWrapper>
		</Link>
		<Link to='/store'>
		<LinkWrapper>
			<Icon src={StoreIcon} alt="Store icon" />
			<p>저장한 게시글 보기</p>
		</LinkWrapper>
		</Link>
		</div>


	</PostBg>
	</>
);
};

const ContentWrapper = styled.div`
text-align: center;
margin-top: -60vh;
font-weight: bold;

`;

const LinkWrapper = styled.div`
text-align: left;
display: flex;
align-items: center;
margin: 10px 0 10px 0; 
font-weight: bold;
color: #4F0D0D; 
font-size: 1.6em; /* 원하는 폰트 크기로 조절, 예: 1.2em */

`;

const Icon = styled.img`
width: 20px;
height: 20px;
margin-right: 5px;
`;

const PostBg = styled.div`
padding: 0 12px;
background: url(${backgroundImage}) no-repeat center center fixed;
background-size: 100%;
background-position: center;
height: calc(var(--vh, 1vh) * 100);100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default MyPageInfo;
