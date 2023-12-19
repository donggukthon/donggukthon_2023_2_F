import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/bg/backgroundimage.png';
import Header from '../../components/Layout/Header'


const Hello = () => {
return (
		<>
		<Header/>
		<PostBg>
		<div style={{ textAlign: 'center'  }}>
		<h1>어서와요 사용자님!</h1>
		<h1>만드신 눈사람은 0명이에요!</h1>
		<div>
		<Link to='/see' style={{ marginBottom: '10px' }}>
		<p>내 눈사람 보기 </p>

		</Link>
		<span></span>
		<Link to='/comment' style={{ marginBottom: '10px' }}>
				<p>내 댓글 보기</p>
		</Link>
		</div>
		<Link to='/like' style={{ marginBottom: '10px' }}>
				<p>좋아요한 게시글 보기</p>
		</Link>

		<Link to='/store' style={{ marginBottom: '10px' }}>
				<p>저장한 게시글 보기</p>
		</Link>

		{/* 이미지와 텍스트를 감싸는 div */}
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
		</div>
		</div>
		</PostBg>
		</>

	);	
};




const PostBg = styled.div`
padding: 0 12px;
background: url(${backgroundImage}) no-repeat center center fixed;
background-size: 100% ;
background-position: center ;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default Hello;





