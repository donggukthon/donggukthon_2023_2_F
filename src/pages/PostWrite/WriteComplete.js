import styled from '@emotion/styled'
import { common } from '../../styles/Common'
import { useDispatch, useSelector } from 'react-redux'
import { setPostDate } from '../../redux/postSlice'

const AddText = () =>{
  const dispatch = useDispatch()
  const imageSrc = useSelector((state) => state.post.imageSrc)
  const textContents = useSelector((state) => state.post.textContents)
  const postDate = useSelector((state) => state.post.postDate)
  
  const getTodayDate = () => {
    const today = new Date()
    console.log(today)
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const date = today.getDate()

    const dateString = year + '.' +  month + '.' + date
    dispatch(setPostDate(dateString))
    return postDate
  }
  
  return (
    <PostBg>
      <CompleteTitle>눈사람 등록 완료</CompleteTitle>
      <div>
        <img src={imageSrc} alt='새로 등록한 눈사람 이미지'/>
        <div>
          <CompleteName>{textContents?.title}</CompleteName>
          <CompleteBirth>{getTodayDate()}</CompleteBirth>
        </div>
        <ul></ul>
        <ul>
          <li>
            <button></button>
            <span>링크복사</span>
          </li>
        </ul>
          <li>
            <button></button>
            <span>다운로드</span>
          </li>
          <li>
            <button></button>
            <span>공유하기</span>
          </li>
      </div>
    </PostBg>
  );
}

const PostBg = styled.div`
  padding:0 24px;
  background:${common.colors.postBg};
`

const sharedFontStyle =`
  font-size:${common.fontSize.fz24};
  font-weight:${common.fontWeight.bold};
`

const CompleteTitle = styled.h2`
  ${sharedFontStyle}
`

const CompleteName = styled.h3`
  ${sharedFontStyle}
`

const CompleteBirth = styled.p`
  font-size:${common.fontSize.fz20};
`
export default AddText