import React from 'react'
import { Routes, Route, useParams} from 'react-router-dom'
import PostRead from './pages/PostRead/PostRead'
import AddPhoto from './pages/PostWrite/AddPhoto'
import AddText from './pages/PostWrite/AddText'
import AddLocation from './pages/PostWrite/AddLocation'
import WriteComplete from './pages/PostWrite/WriteComplete'
import PostOtherUserView from './pages/PostRead/PostOtherUser'

import Mypage from './pages/Viewmypage/Mypage.js'
import See from './pages/Viewmypage/See'
import Store from './pages/Viewmypage/Store'
import Like from './pages/Viewmypage/Like'
import Commnet from './pages/Viewmypage/Comment'
import Mainpage from './pages/Viewmypage/Mainpage'
import Mainmaps from './pages/Viewmypage/Mainmaps'
import LoginPage from './pages/Login/Login'
import KakaoLogin from './pages/Login/KakaoLogin'
// import AuthLayout from './components/Layout/AuthLayout'


const PageRoute = () =>{
  const { id } = useParams();
  return (
    <Routes>
      {/* <Route element={<AuthLayout />}> */}
        <Route path='/post/photo' element={<AddPhoto />}></Route>
        <Route path='/post/text' element={<AddText />}></Route>
        <Route path='/post/location' element={<AddLocation />}></Route>
        <Route path='/post' element={<WriteComplete />}></Route>
        <Route path='/main' element={<Mainpage />}></Route>
        <Route path='/mypage' element={<Mypage />}></Route>
        <Route path='/see' element={<See  />}></Route>
        <Route path='/store' element={<Store  />} ></Route>
        <Route path='/like' element={<Like  />} ></Route>
        <Route path='/comment' element={<Commnet />} ></Route>
      {/* </Route> */}

      <Route path='/' element={<Mainmaps />}></Route>
      <Route path='/read' element={<PostRead />}></Route>
      <Route path='/user/:id' element={<PostOtherUserView userId={id} />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/oauth2/authorization/kakao' element={<KakaoLogin />}></Route>
      {/* <Route path='/auth' element={<KakaoLogin />}></Route> */}
    </Routes>
  )
}


export default PageRoute;