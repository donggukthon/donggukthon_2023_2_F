import React from 'react';
import { Link } from 'react-router-dom';
import snowman from '/Users/nam/Desktop/notmine/snowman1218/donggukthon_2023_2_F/src/image_32.png';
import PostBtn from '../../components/PostBtn'

const Hello = () => {
return (
    <div style={{ textAlign: 'center' }}>
    <h1>어서와요 사용자님!</h1>
    <h1>만드신 눈사람은 0명이에요!</h1>

    <Link to='/see' style={{ marginBottom: '10px' }}>
        <PostBtn value='내 눈사람 보기'/>
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
        alt="눈사람임"
        style={{ width: '100%', maxWidth: '100px', margin: '10px' }}
        />
        <p style={{ marginRight: '40px', fontSize: '18px' }}>오늘 목도리 어떠요?</p>
    </div>
    </div>
);
};

export default Hello;
