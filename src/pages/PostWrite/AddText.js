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

const AddText = () =>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const textContents = useSelector((state) => state.post.textContents)
  const postID = useSelector((state) => state.postId.id)
  const ACCESS_TOKEN = useSelector((state) => state.token.value)

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

  const handleUpload = async () => { 
       
    await axios.post(`${BASE_URL}/posting/description`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
      },
      body:{
        'postingId': postID,
        'snowmanName': textContents.title,
        'snowmanNameDescription': textContents.contents
      }
    }).then((result) => {
      navigate('/post/location')
    }).catch((error)=>{
      console.error(error)
    })
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
  height: 100vh;
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