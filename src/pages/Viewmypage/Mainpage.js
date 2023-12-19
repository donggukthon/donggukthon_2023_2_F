import React from 'react';
import { Link } from 'react-router-dom';
import snowman from '/Users/nam/Desktop/notmine/snowman1218/donggukthon_2023_2_F/src/___________1.png';
import PostBtn from '../../components/PostBtn';
import window from '/Users/nam/Desktop/notmine/snowman1218/donggukthon_2023_2_F/src/____________5__1.png'
const Hello = () => {
return (
    <div style={{ textAlign: 'center' }}>
    <h1>어서와요 사용자님!</h1>
    <h1>만드신 눈사람은 0명이에요!</h1>
    <br></br>
    <br></br>
    <br></br>

    <Link to='/see' style={{ marginBottom: '10px' }}>
        <PostBtn value='내 눈사람 보기' />
    </Link>

    <Link to='/commnet' style={{ marginBottom: '10px' }}>
        <p>내 댓글 보기</p>
    </Link>

    <Link to='/like' style={{ marginBottom: '10px' }}>
        <p>좋아요한 게시글 보기</p>
    </Link>

    <Link to='/store' style={{ marginBottom: '10px' }}>
        <p>저장한 게시글 보기</p>
    </Link>

    {/* 이미지와 텍스트를 감싸는 div */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        <img
        src={snowman} // 이미지 파일의 경로를 지정해주세요.
        style={{ width: '200%', maxWidth: '400px', margin: '5px' }}
        />
    </div>
    </div>
);
};

export default Hello;
