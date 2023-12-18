import styled from '@emotion/styled'
import Divider from '../../components/Divider'
import Header from '../../components/Layout/Header'

const PostRead = () =>{
  return (
    <>
    <Header />
      <InnerBox>
        <div>
          <SnowmanInfoBox>
           <div>
              <h2>땡땡 눈사람</h2>
              <div>
                <span>삼성 2동</span> 
                <span>23년 1월 1일</span>
              </div>
            </div> 
            <Userinfo>
              1234@user
            </Userinfo>
          </SnowmanInfoBox>
          <div>
            본문입니다.<br />
            본문입니다.<br />
            본문입니다.<br />
          </div>
        </div>
        <ContentBottomBox>
          <div>
            <button>like</button>
            <button>comments</button>
          </div>
          <div>
            <button>save</button>
            <button>share</button>
          </div>
        </ContentBottomBox>
        <Divider />
      </InnerBox>
    </>
  );
}

const InnerBox = styled.div`
  padding:0 16px;
`

const SnowmanInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Userinfo = styled.div`
  color: #878B94;
`

const ContentBottomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export default PostRead