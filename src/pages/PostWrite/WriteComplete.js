import styled from '@emotion/styled'
import { common } from '../../styles/Common'
import { useDispatch, useSelector } from 'react-redux'
import { setPostDate } from '../../redux/postSlice'
import { Link, useLocation  } from 'react-router-dom'
import Close from '../../assets/icon/Close.png'
import CopyURLSnowman from '../../assets/icon/CopyURLSnowman.png'
import SaveSnowman from '../../assets/icon/SaveSnowman.png'
import ShareKakao from '../../assets/icon/ShareKakao.png'


const AddText = () =>{
  const baseUrl = `http://localhost:3000`
  const dispatch = useDispatch()
  const currentLocation = useLocation()
  const imageSrc = useSelector((state) => state.post.imageSrc)
  const textContents = useSelector((state) => state.post.textContents)
  const postDate = useSelector((state) => state.post.postDate)
  
  const getTodayDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const date = today.getDate()

    const dateString = year + '.' +  month + '.' + date
    dispatch(setPostDate(dateString))
    return postDate
  }

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('링크가 복사되었습니다.');
    } catch (error) {
      alert('링크 복사에 실패하였습니다.');
    }
  };
  
  return (
    <PostBg>
      <CompleteTitleWrap>
        <CompleteTitle>눈사람 등록 완료 </CompleteTitle>
        <Link to='/'>
          <img src={Close} alt='close' />
        </Link>
      </CompleteTitleWrap>
      <CompleteCardWrap>
        <CompleteImgWrap><img src={imageSrc} alt='새로 등록한 눈사람 이미지' /></CompleteImgWrap>
        <div>
          <CompleteName>{textContents?.title}</CompleteName>
          <CompleteBirth>{getTodayDate()}</CompleteBirth>
        </div>
      </CompleteCardWrap>
      <div>
        <CompleteButtonWrap>
          <li>
            <button onClick={() => handleCopyClipBoard(`${baseUrl}${currentLocation.pathname}`)}>
              <img src={CopyURLSnowman} alt='링크 복사' />
              <span>링크복사</span>
            </button>
          </li>
          <li>
            <button>
              <img src={SaveSnowman} alt='링크 복사' />
              <span>다운로드</span>
            </button>
          </li>
          <li>
            <button>
              <img src={ShareKakao} alt='링크 복사' />
              <span>공유하기</span>
            </button>
          </li>
        </CompleteButtonWrap>
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
  margin:28px auto;
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
  margin-bottom:7px;
`
const CompleteBirth = styled.p`
  font-size:${common.fontSize.fz20};
`

const CompleteButtonWrap = styled.ul`
  width:240px;
  margin: 0 auto;
  display:flex;
  justify-content:space-between;
  img{
    display:block;
    margin-bottom:8px;
  }
`
export default AddText