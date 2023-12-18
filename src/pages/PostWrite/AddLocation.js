import styled from '@emotion/styled'
import { common } from '../../styles/Common'
import PostBtn from '../../components/PostBtn'
import TitleWrap from './TitleWrap'

const AddText = () =>{
  return (
    <PostBg>
      <TitleWrap title='눈사람보러오세요' subTitle='위치 추가'/>
      {/* useNavigate */}
      <PostBtn value='등록하기' type='submit' to='/post'/>
    </PostBg>
  );
}
const PostBg = styled.div`
  padding:0 ${common.padding};
  background:${common.colors.postBg};
`

export default AddText