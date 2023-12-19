import styled from '@emotion/styled'
import { common } from '../../styles/Common'
import Divider from '../../components/Divider'
import Header from '../../components/Layout/Header'
import SampleSnowman from '../../assets/bg/SampleSnowman.png'
import ReadShare from '../../assets/icon/ReadShare.svg'
import ReadBookMark from '../../assets/icon/ReadBookMark.svg'
import Send from '../../assets/icon/Send.png'
import bg from '../../assets/bg/postBGGrey.png'
import Stamp from '../../assets/icon/Stamp.png'
import { useDispatch, useSelector } from 'react-redux'
import { setComment } from '../../redux/commentSlice'
import { css } from '@emotion/react'
import LikeCount from '../../components/LikeCount'
import CommentCount from '../../components/CommentCount'


const PostRead = () =>{
  const dispatch = useDispatch()
  const comment = useSelector((state) => state.comment)

  const handleCommentUpdate = (e) =>{
    dispatch(setComment({
      ...comment,
      text: e.target.value,
    }))
  }

  return (
    <>
      <Header />
      <PostBg height100={true}>
        <div>
          <SnowmanImgBox>
            <img src={SampleSnowman} alt='눈사람 사진'/>
          </SnowmanImgBox>
          <SnowmanInfoBox>
            <div>
              <h2>땡땡 눈사람</h2>
              <SnowmanLocation>
                <span>삼성 2동</span> · <span>23년 1월 1일</span>
              </SnowmanLocation>
            </div> 
            <Userinfo>
              <img src={Stamp} alt='스탬프' />
              1234@user
            </Userinfo>
          </SnowmanInfoBox>
          <SnowmanTextBox>
            오늘 눈사람 만들었어요!<br />
            땡땡이를 소개합니다 ㅎㅎ<br />
          </SnowmanTextBox>
        </div>
        <ContentButtonBox>
          <div>
            <LikeCount count={10} isLiked={true}/>
            <CommentCount count={10} />
          </div>
          <div>
            <Button>
              <img src={ReadBookMark} alt='게시물 북마크하기' />
            </Button>
            <Button>
              <img src={ReadShare} alt='게시물 공유하기' />
            </Button>
          </div>
        </ContentButtonBox>
        <Divider />
        <CommentsList>
          <div>
            <CommentUserName>2645@user</CommentUserName>
            <CommentBody>너무 귀여워요!</CommentBody>
            <ColorGrey>2023.12.18</ColorGrey>
          </div>
          <div>
            <CommentUserName>9845@user</CommentUserName>
            <CommentBody>만드는데 얼마나 걸리셨어요?</CommentBody>
            <ColorGrey>2023.12.18</ColorGrey>
          </div>
        </CommentsList>
      </PostBg>
      <PostBg notBg={true} bottomFixed={true}>
        <Line></Line>
        <CommentBox>
          <InputPostComment type='text' name='comment' placeholder='댓글을 입력해주세요' onChange={handleCommentUpdate} value={comment.value} />
          <div><img src={Send} alt='댓글 전송'/></div>
        </CommentBox>
      </PostBg>
    </>
  );
}

const PostBg = styled.section`
  padding:48px ${common.padding} 0 ;
  background: ${(props) => props.notBg ? `${common.colors.white}` : `url(${bg}) no-repeat center/cover`};
  height: ${(props) => props.height100 ? `100vh` : ``};
  ${(props) =>
    props.bottomFixed &&
    css`
      position: fixed;
      bottom: 0;
      width:100%;
      padding:0 20px 14px 20px;
    `}
`
const ColorGrey = styled.span`
  color: ${common.colors.postReadGrey};
`

const SnowmanImgBox = styled.div`
  overflow:hidden;
  border-radius:10px;
  width:100%;
  img{
    width:100%;
  }
`
const SnowmanInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2{
    margin:12px 0;
  }
`
const Userinfo = styled.div`
  color:${common.colors.postReadRed};
  display:flex;
  align-items:center;
  img{
    margin-right: 5px;
  }
`
const SnowmanLocation = styled.div`
color: ${common.colors.postReadGrey};
  font-size:${common.fontSize.fz12};
`
const SnowmanTextBox = styled.div`
  margin:16px 0;
`
const ContentButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div{
    display:flex;
  }
`
const Button = styled.button`
  display:flex;
  align-items:center;
  span{
    margin-left:7px;
  }
  &:nth-of-type(2n){
    margin-left:7px;
  }
`
const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  div{
    display:inline-block;
    padding:16px 34px 16px 8px;
    margin-bottom:8px;
    background:${common.colors.postWriteBoxBG};
    border-radius:10px;
    align-self: flex-start;
  }
`

const CommentUserName = styled.p`
  color:${common.colors.postReadRed};
`
const CommentBody = styled.p`
  margin:3px 0;
`

const CommentBox = styled.div`
  display:flex;
  align-items:center;
  justify-contens:space-between;
`
const InputPostComment = styled.input`
  height:44px;
  border-radius:5px;
  padding-left:10px;
  background:${common.colors.postWriteBoxBG};
  color:${common.colors.postReadInputColor};
  flex:1;
  margin-right:10px;
`

const Line = styled.hr`
  margin: 0 0 10px 0;
  border:1px solid #B9C3CC;
  `
export default PostRead