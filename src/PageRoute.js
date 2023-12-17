import React from 'react'
import { Routes, Route} from 'react-router-dom'
import PostRead from './pages/PostRead/PostRead'
import AddPhoto from './pages/PostWrite/AddPhoto'
import AddText from './pages/PostWrite/AddText'
import AddLocation from './pages/PostWrite/AddLocation'
import WriteComplete from './pages/PostWrite/WriteComplete'
import Layout from './components/Layout/Layout';

const PageRoute = () =>{
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/post/photo' element={<AddPhoto />}></Route>
        <Route path='/post/text' element={<AddText />}></Route>
        <Route path='/post/location' element={<AddLocation />}></Route>
        <Route path='/post' element={<WriteComplete />}></Route>
        <Route path='/read' element={<PostRead />}></Route>
      </Route>
    </Routes>
  );
}


export default PageRoute;