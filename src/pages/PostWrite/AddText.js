import styled from '@emotion/styled'
import PostBtn from '../../components/PostBtn'
import TitleWrap from './TitleWrap'
import { common } from '../../styles/Common'
import { useDispatch, useSelector } from 'react-redux'
import { setTextContents } from '../../redux/postSlice'

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
      <TitleWrap title='눈사람보러오세요' subTitle='글쓰기'/>
      <InputPostTitle name='title' type='text' placeholder='제목' onChange={handleTitleUpdate} value={textContents.title} />
      <InputPostContent name='contents' placeholder='내용' onChange={handleContentsUpdate} value={textContents.contents}/>    
      <PostBtn value='다음' type='button' to='/post/location'/>
    </>
  );
}

const sharedInputStyles = `
  width:100%;
  background:${common.colors.postWriteBoxBG};
  color:${common.colors.postWriteBoxTextColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const InputPostTitle = styled.input`
  ${sharedInputStyles}
  margin-bottom:10px;
  height:20%;
`

const InputPostContent = styled.textarea`
  ${sharedInputStyles}
  height:80%;
`
export default AddText