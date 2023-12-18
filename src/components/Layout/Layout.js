import React from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () =>{

  return(
    <>
      <TotalWrap>
        <Header />
        <Outlet/>
      </TotalWrap>
    </>
  )
}

const TotalWrap = styled.div`
  position:relative;
  max-width:768px;
  width:100%;
  margin:0 auto;
  border: 1px solid #000;
  height:100vh;
  > div{
    height:100%;
  }
`


export default Layout