import styled from '@emotion/styled'
import TitleWrap from './TitleWrap'
import PostBtn from '../../components/PostBtn'
import { common } from '../../styles/Common'
import { useDispatch, useSelector } from 'react-redux'
import { setImageSrc } from '../../redux/postSlice'


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
    <>
      <TitleWrap title='눈사람보러오세요' subTitle='사진 등록'/>
      <label htmlFor='snowmanUpload'>
        <PhotoBox>
          <PhotoBoxText>사진 등록하기</PhotoBoxText>
          <PhotoBoxImg src={imageSrc} alt='새로 등록한 눈사람 이미지'/>
        </PhotoBox>
      </label>
        <InputPostFile type='file' id='snowmanUpload' accept='image/*' onChange={handelFileUpload}/>
        <PostBtn value='다음' type='button' to='/post/text' />
    </>
  );
}

const InputPostFile = styled.input`
  display:none;
`

const PhotoBox = styled.div`
  width:100px;
  height:100px;
  color:${common.colors.white};
  position:relative;
  overflow:hidden;
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

const PhotoBoxText = styled.span`
  position:absolute;
  width:100%;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  text-align:center;
  color:${common.colors.white};
  z-index:1;
`

const PhotoBoxImg = styled.img`
  position:relative;
  right:50%;
  width:100%;
  transform:translateX(50%);
`
export default AddPhoto