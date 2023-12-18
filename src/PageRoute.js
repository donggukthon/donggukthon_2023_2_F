import React from 'react'
import { Routes, Route} from 'react-router-dom'
import PostRead from './pages/PostRead/PostRead'
import AddPhoto from './pages/PostWrite/AddPhoto'
import AddText from './pages/PostWrite/AddText'
import AddLocation from './pages/PostWrite/AddLocation'
import WriteComplete from './pages/PostWrite/WriteComplete'
import Layout from './components/Layout/Layout';

import Mypage from "./pages/Viewmypage/Mypage.js";
import See from "./pages/Viewmypage/See";
import Store from "./pages/Viewmypage/Store"
import Like from "./pages/Viewmypage/Like";
import Commnet from "./pages/Viewmypage/Comment";
import Mainpage from "./pages/Viewmypage/Mainpage";
import Mainmaps from "./pages/Viewmypage/Mainmaps";
import Maplayout from './components/Layout/Maplayout'


const PageRoute = () =>{
  return (
    <Routes>
        
        <Route element={<Maplayout />}>
        <Route path='/' element={<Mainmaps />}></Route>

        </Route>
      <Route element={<Layout />}>
        <Route path='/post/photo' element={<AddPhoto />}></Route>
        <Route path='/post/text' element={<AddText />}></Route>
        <Route path='/post/location' element={<AddLocation />}></Route>
        <Route path='/post' element={<WriteComplete />}></Route>
        <Route path='/read' element={<PostRead />}></Route>

        <Route path='/main' element={<Mainpage />}></Route>
        <Route path='/mypage' element={<Mypage />}></Route>
        <Route path='/see' element={<See  />}></Route>
        <Route path='/store' element={<Store  />} ></Route>
        <Route path='/like' element={<Like  />} ></Route>
        <Route path='/comment' element={<Commnet />} ></Route>
      </Route>
    </Routes>
  );
}


export default PageRoute;