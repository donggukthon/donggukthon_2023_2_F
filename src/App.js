import React from 'react'
import { Global } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import PageRoute from './PageRoute'
import { reset } from './styles/Reset'

const App = () =>{
  return (
    <BrowserRouter>
      <Global styles={reset} />
      <PageRoute/>
    </BrowserRouter>
  );
}

export default App;
