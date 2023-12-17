import PostBtn from '../../components/PostBtn'
import TitleWrap from './TitleWrap'

const AddText = () =>{
  return (
    <>
      <TitleWrap title='눈사람보러오세요' subTitle='위치 추가'/>
      {/* useNavigate */}
      <PostBtn value='등록하기' type='submit' to='/post'/>
    </>
  );
}

export default AddText