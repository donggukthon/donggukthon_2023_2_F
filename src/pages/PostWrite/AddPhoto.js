import styled from '@emotion/styled'
import TitleWrap from './TitleWrap'
import PostBtn from '../../components/PostBtn'
import Header from '../../components/Layout/Header'
import { common } from '../../styles/Common'
import { useDispatch, useSelector } from 'react-redux'
import { setImage } from '../../redux/postSlice'
import PostAddImg from '../../assets/icon/PostAddImg.png'
import bg from '../../assets/bg/postBGGrey.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ACCESS_TOKEN } from '../../utils/api'
import { setPostId } from '../../redux/postIdSlice' 

const AddPhoto = () =>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const imageSrc = useSelector((state) => state.post.imageSrc)

  // const file = useSelector((state) => state.post.file)
  const [multipartFile, setmultipartFile] = useState(null)
  // input에 파일 업로드 시
  const handelFileUpload = (e) => {
    const multipartFile = e.target.files[0]
    setmultipartFile(multipartFile)

    const reader = new FileReader()
    reader.onload = () => {	
      dispatch(setImage(reader.result))
    }
    reader.readAsDataURL(multipartFile)
  }
  // 서버 전달
  // const handleUpload = async () => {
  //   console.log(`access token value : ${ACCESS_TOKEN}`)

  //   const formData = new FormData()
  //   formData.append('multipartFile', multipartFile)
  //   await axios.post(`http://34.22.106.126:8080/posting/image`, formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       'Authorization': 'Bearer ' + ACCESS_TOKEN,
  //     },
  //   }).then((result) => {
  //     navigate('/post/text')
  //   }).catch((error)=>{
  //     console.error(error)
  //   })
  // }

  return (
    <>
      <Header />
      <PostBg>
        <TitleWrap title='우리 눈사람은 이렇게 생겼어요!' subTitle='눈사람의 사진을 등록해주세요.'/>
        <label htmlFor='snowmanUpload'>
          <PhotoBox>
            <PhotoBoxText>
              <img src={PostAddImg} alt='plus' />
              사진 등록하기
            </PhotoBoxText>
            <img src={imageSrc} alt='새로 등록한 눈사람 이미지'/>
          </PhotoBox>
        </label>
        <InputPostFile type='file' id='snowmanUpload' accept='image/*' onChange={handelFileUpload}/>
        {/* <PostBtn value='다음' type='button' onClick={handleUpload}/> */}
        <PostBtn value='다음' type='button' to='/post/text'/>
    </PostBg>
    </>
  );
}

const PostBg = styled.div`
  padding:0 24px;
  background:url(${bg}) no-repeat center/cover;
  height: calc(var(--vh, 1vh) * 100);
`

const InputPostFile = styled.input`
  display:none;
`

const PhotoBox = styled.div`
  margin:0 auto;
  width:285px;
  height:285px;
  color:${common.colors.white};
  position:relative;
  overflow:hidden;
  border-radius:5px;
  display: flex;
  justify-content: center;
  &:after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    background:#000;
    width:100%;
    height:100%;
    opacity:0.3;
  }
`

const PhotoBoxText = styled.div`
  position:absolute;
  width:100%;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  text-align:center;
  color:${common.colors.white};
  z-index:1;
  img{
    display:block;
    margin:0 auto 5px;
  }
`
export default AddPhoto