import styled from '@emotion/styled'
import { common } from '../../styles/Common'
import { useDispatch, useSelector } from 'react-redux'
import { setPostDate } from '../../redux/postSlice'
import Close from '../../assets/icon/Close.png'


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
      <CompleteTitleWrap>
        <CompleteTitle>눈사람 등록 완료 </CompleteTitle>
        <img src={Close} alt='close' />
      </CompleteTitleWrap>
      <CompleteCardWrap>
        <CompleteImgWrap><img src={imageSrc} alt='새로 등록한 눈사람 이미지'/></CompleteImgWrap>
        <div>
          <CompleteName>{textContents?.title}</CompleteName>
          <CompleteBirth>{getTodayDate()}</CompleteBirth>
        </div>
      </CompleteCardWrap>
      <div>
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
  height: 100vh;
  text-align:center;
`

const sharedFontStyle =`
  font-size:${common.fontSize.fz24};
  font-weight:${common.fontWeight.bold};
`

const CompleteTitleWrap = styled.div`
  height:50px;
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    display:block;
    position:absolute;
    top:50%;
    right:0;
    transform:translateY(-50%);
  }
`
const CompleteTitle = styled.h2`
  ${sharedFontStyle}
`
const CompleteCardWrap = styled.div`
  width:300px;
  background:${common.colors.postWriteBoxBG};
  border-radius:10px;
  padding:${common.padding};
  margin:28px auto 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`
const CompleteImgWrap = styled.div`
  width:260px;
  height:260px;
  overflow:hidden;
  border-radius:8px;
  display: flex;
  justify-content: center;
  margin-bottom:15px;
`

const CompleteName = styled.h3`
  ${sharedFontStyle}
`
const CompleteBirth = styled.p`
  font-size:${common.fontSize.fz20};
`
export default AddText