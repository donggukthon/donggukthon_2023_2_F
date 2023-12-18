import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { common } from '../../styles/Common'
import Preview from '../../assets/icon/Preview.png'

const Header = () =>{
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname
  let headerContents = '';

  switch (currentPath) {
    case '/post/photo':
      headerContents = 
        <WriteProgressWrap>
          <li className='active'></li>
          <li></li>
          <li></li>
        </WriteProgressWrap>;
      break;
    case '/post/text':
      headerContents = 
        <WriteProgressWrap>
          <li></li>
          <li className='active'></li>
          <li></li>
        </WriteProgressWrap>;
      break;
    case '/post/location':
      headerContents = 
        <WriteProgressWrap>
          <li></li>
          <li></li>
          <li className='active'></li>
        </WriteProgressWrap>;
      break;
    case '/read/':
      headerContents = '눈사람 도감';
      break;
    default:
      headerContents = '';
  }
  
  const BackLocation = () => {  
    navigate(-1)
  }

  return (
    <HeaderWarp>
      <BackButton onClick={BackLocation}>
        <img src={Preview} alt='뒤로가기' />
      </BackButton>
      {headerContents}
    </HeaderWarp>
  )
}

const HeaderWarp = styled.header`
  height: 50px;
  line-height: 50px;
  background:;
  text-align:center;
  position:sticky;
  top:0;
  width:100%;
  background:${common.colors.white};
  display:flex;
  align-items:center;
  justify-content:center;
`
const BackButton = styled.button`
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
`
const WriteProgressWrap = styled.ul`
  display:flex;
  li{
    width:70px;
    height:15px;
    background:${common.colors.whiteF3};
    border-radius:35px;
    margin-right:11px;
    &:last-child{
      margin-right:0;
    }
    &.active{
      background:${common.colors.pointRed};
    }
  }
`
export default Header