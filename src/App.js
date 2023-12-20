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

  

  return (
    <BrowserRouter>
      <Global styles={reset} />
      <PageRoute/>
    </BrowserRouter>
  );
}

export default App;
