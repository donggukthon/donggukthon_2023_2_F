import styled from '@emotion/styled'
import { common } from '../../styles/Common'
import Divider from '../../components/Divider'
import Header from '../../components/Layout/Header'
import ImgSample from '../../assets/duck.jpg'
import ReadComments from '../../assets/icon/ReadComments.svg'
import ReadLike from '../../assets/icon/ReadLike.svg'
import ReadShare from '../../assets/icon/ReadShare.svg'
import ReadBookMark from '../../assets/icon/ReadBookMark.svg'
import Send from '../../assets/icon/Send.png'
import { useDispatch, useSelector } from 'react-redux'
import { setComment } from '../../redux/commentSlice'

const PostRead = () =>{
  const dispatch = useDispatch()
  const comment = useSelector((state) => state.comment.comment)

  const handleCommentUpdate = (e) =>{
    dispatch(setComment({
      ...comment,
      text: e.target.value,
    }))
  }

  return (
    <>
      <Header />
      <PostBg>
        <div>
          <SnowmanImgBox>
            <img src={ImgSample} alt='눈사람 사진'/>
          </SnowmanImgBox>
          <SnowmanInfoBox>
            <div>
              <h2>땡땡 눈사람</h2>
              <SnowmanLocation>
                <span>삼성 2동</span> · <span>23년 1월 1일</span>
              </SnowmanLocation>
            </div> 
            <Userinfo>
              1234@user
            </Userinfo>
          </SnowmanInfoBox>
          <SnowmanTextBox>
            본문입니다.<br />
            본문입니다.<br />
            본문입니다.<br />
          </SnowmanTextBox>
        </div>
        <ContentButtonBox>
          <div>
            <Button>
              <img src={ReadLike} alt='좋아요 개수' />
              <span>10</span>
            </Button>
            <Button>
              <img src={ReadComments} alt='댓글 개수' />
              <span>10</span>
            </Button>
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
      </PostBg>
      <PostBg>
        <CommentsList>
          <div>
            <p>유저 이름</p>
            <p>댓글</p>
            <p>날짜</p>
          </div>
          <div>
            <p>유저 이름</p>
            <p>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</p>
            <p>날짜</p>
          </div>
        </CommentsList>
      </PostBg>
      <Divider />
      <PostBg>
        <CommentBox>
          <InputPostComment type='text' name='comment' placeholder='댓글을 입력해주세요' onChange={handleCommentUpdate} value={comment.value} />
          <div><img src={Send} alt='댓글 전송'/></div>
        </CommentBox>
      </PostBg>
    </>
  );
}

const PostReadGrey =`
  color: ${common.colors.postReadGrey};
`

const PostBg = styled.section`
  padding:0 ${common.padding};
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
  ${PostReadGrey}
`
const SnowmanLocation = styled.div`
  ${PostReadGrey}
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
  ${PostReadGrey}
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
  div{
    display:inline-block;
    padding:16px 34px 16px 8px;
    margin-bottom:8px;
    background:${common.colors.postWriteBoxBG};
    border-radius:10px;
  }
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
export default PostRead