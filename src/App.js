import React from 'react'
import { Global } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import PageRoute from './PageRoute'
import { reset } from './styles/Reset'
import { useEffect } from 'react'

const App = () =>{
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
  }

  window.addEventListener('resize', () => setScreenSize());
  
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
  }

  useEffect(() => {
    setScreenSize();
  }); 

  // useEffect(() => {
  //   console.log("start to load kakao maps api")
  //   const kakaoMapScript = document.createElement("script");
  //   kakaoMapScript.async = false;
  //   kakaoMapScript.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=ad72385a83fbad8abbd735a1f9473931&libraries=services,clusterer";
  //   document.head.appendChild(kakaoMapScript);
  // },[])
  
 
  return (
    <BrowserRouter>
      <Global styles={reset} />
      <PageRoute/>
    </BrowserRouter>
  );
}

export default App;
