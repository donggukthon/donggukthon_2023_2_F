import styled from '@emotion/styled'
import { common } from '../../styles/Common'
import PostBtn from '../../components/PostBtn'
import TitleWrap from './TitleWrap'
import Header from '../../components/Layout/Header'

const AddText = () =>{
  return (
    <>
      <Header />
      <PostBg>
      <TitleWrap title='우리 눈사람은 여기에 있어요!' subTitle='핀을 움직여 눈사람의 위치를 선택해주세요.'/>
      {/* useNavigate */}
      <PostBtn value='등록하기' type='submit' to='/post'/>
    </PostBg>
    </>
  );
}
const PostBg = styled.div`
  padding:0 ${common.padding};
  background:${common.colors.postBg};
  height: 100vh;
`

export default AddText