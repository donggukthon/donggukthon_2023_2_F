import styled from '@emotion/styled'
import PostBtn from '../../components/PostBtn'
import Header from '../../components/Layout/Header'
import TitleWrap from './TitleWrap'
import { common } from '../../styles/Common'
import { useDispatch, useSelector } from 'react-redux'
import { setTextContents } from '../../redux/postSlice'
import bg from '../../assets/bg/postBGGrey.png'

const AddText = () =>{
  const dispatch = useDispatch()
  const textContents = useSelector((state) => state.post.textContents)

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

  return (
    <>
      <Header />
      <PostBg>
        <TitleWrap title='우리 눈사람을 소개할게요!' subTitle='눈사람에 대해 작성해주세요.'/>
        <InputPostTitle name='title' placeholder='제목' onChange={handleTitleUpdate} value={textContents.title} />
        <InputPostContent name='contents' placeholder='내용' onChange={handleContentsUpdate} value={textContents.contents}/>    
        <PostBtn value='다음' type='button' to='/post/location'/>
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