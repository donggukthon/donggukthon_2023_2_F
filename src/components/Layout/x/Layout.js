import React from 'react'
import styled from '@emotion/styled'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import backgroundImage1 from '../../assets/main/backgroundimage.png'

const Layout = () => {
  return (
    <>
      <TotalWrap>
        <Header />
        <Outlet />
      </TotalWrap>
    </>
  );
};

const TotalWrap = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #000;
  background-image: url(${backgroundImage1});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh; // 전체 화면 높이를 채우도록 설정
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  > div{
    height:100%;
  }
`


export default Layout;
