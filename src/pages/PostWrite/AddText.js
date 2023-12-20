import axios from 'axios'
import styled from '@emotion/styled'
import PostBtn from '../../components/PostBtn'
import Header from '../../components/Layout/Header'
import TitleWrap from './TitleWrap'
import { common } from '../../styles/Common'
import { useDispatch, useSelector } from 'react-redux'
import { setTextContents } from '../../redux/postSlice'
import bg from '../../assets/bg/postBGGrey.png'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utils/api'
import setPostId from '../../redux/postIdSlice'
import { useEffect } from 'react'

const AddText = () =>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const textContents = useSelector((state) => state.post.textContents)
  const postId = useSelector((state) => state.postId.id)

  const handleTitleUpdate = (e) =>{
    dispatch(setTextContents({
      ...textContents,
      title: e.target.value,
    }))
  }

  const handleContentsUpdate = (e) =>{
    dispatch(setTextContents({
      ...textContents,
      contents: e.target.value
    }))
  }

  // useEffect(() => {
  //   axios.get('http://34.22.106.126:8080/posting/image')
  //     .then((response) => {
  //       // 글로벌 상태에 카테고리를 저장합니다.
  //       dispatch(setPostId(response.data));
  //     })
  //     .catch((error) => {
  //       // 에러 핸들링
  //       console.error('Error fetching categories:', error);
  //     });
  // }, [dispatch]);

  const handleUpload = ()=> { 
    // await axios.post(`http://34.22.106.126:8080/posting/description`, {
    //   body:{
    //     'postingId': postID,
    //     'snowmanName': textContents.title,
    //     'snowmanNameDescription': textContents.contents
    //   }
    // }).then((result) => {
    //   navigate('/post/location')
    // }).catch((error)=>{
    //   console.error(error)
    // })
  }

  return (
    <>
      <Header />
      <PostBg>
        <TitleWrap title='우리 눈사람을 소개할게요!' subTitle='눈사람에 대해 작성해주세요.'/>
        <InputPostTitle name='title' placeholder='제목' onChange={handleTitleUpdate} value={textContents.title} />
        <InputPostContent name='contents' placeholder='내용' onChange={handleContentsUpdate} value={textContents.contents}/>    
        <PostBtn value='다음' type='button' onClick={handleUpload}/>
      </PostBg>
    </>
  );
}

const PostBg = styled.div`
  padding:0 24px;
  background:url(${bg}) no-repeat center/cover;
  height: calc(var(--vh, 1vh) * 100);
`

const sharedInputStyles = `
  width:100%;
  background:${common.colors.postWriteBoxBG};
  color:${common.colors.postWriteBoxTextColor};
  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius:10px;
  padding:12px 14px;
`

const InputPostTitle = styled.textarea`
  ${sharedInputStyles}
  margin-bottom:10px;
  height:86px;
  resize:none;
`

const InputPostContent = styled.textarea`
  ${sharedInputStyles}
  height:350px;
  resize:none;
`
export default AddText