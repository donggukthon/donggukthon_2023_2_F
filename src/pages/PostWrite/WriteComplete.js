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
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.');
    dispatch(setPostDate(today))
    return postDate
  }
  
  return (
    <>
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
    </>
  );
}

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