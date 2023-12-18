import styled from '@emotion/styled'
import TitleWrap from './TitleWrap'
import PostBtn from '../../components/PostBtn'
import { common } from '../../styles/Common'
import { useDispatch, useSelector } from 'react-redux'
import { setImageSrc } from '../../redux/postSlice'
import PostAddImg from '../../assets/icon/PostAddImg.png'


const AddPhoto = () =>{
  const dispatch = useDispatch()
  const imageSrc = useSelector((state) => state.post.imageSrc)

  const handelFileUpload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.onload = () => {	
      dispatch(setImageSrc(reader.result));
    };
    reader.readAsDataURL(file);
  }

  return (
    <PostBg>
      <TitleWrap title='눈사람보러오세요' subTitle='사진 등록'/>
      <label htmlFor='snowmanUpload'>
        <PhotoBox>
          <PhotoBoxText>
            <img src={PostAddImg} alt='plus' />
            사진 등록하기
            </PhotoBoxText>
          <img src={imageSrc} alt='새로 등록한 눈사람 이미지'/>
        </PhotoBox>
      </label>
        <InputPostFile type='file' id='snowmanUpload' accept='image/*' onChange={handelFileUpload}/>
        <PostBtn value='다음' type='button' to='/post/text' />
    </PostBg>
  );
}

const PostBg = styled.div`
  padding:0 24px;
  background:${common.colors.postBg};
`

const InputPostFile = styled.input`
  display:none;
`

const PhotoBox = styled.div`
  margin:0 auto;
  width:285px;
  height:285px;
  color:${common.colors.white};
  position:relative;
  overflow:hidden;
  border-radius:5px;
  display: flex;
  justify-content: center;
  &:after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    background:#000;
    width:100%;
    height:100%;
    opacity:0.3;
  }
`

const PhotoBoxText = styled.div`
  position:absolute;
  width:100%;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  text-align:center;
  color:${common.colors.white};
  z-index:1;
  img{
    display:block;
    margin:0 auto 5px;
  }
`
export default AddPhoto