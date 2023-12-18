import styled from '@emotion/styled'
import { useLocation } from 'react-router-dom'

const Header = (props) =>{
  const location = useLocation()
  const currentPath = location.pathname
  let displayText = '';

  switch (currentPath) {
    case '/post/photo':
      displayText = 'post/photo 페이지에 대한 텍스트';
      break;
    case '/post/text':
      displayText = 'post/text 페이지에 대한 텍스트';
      break;
    case '/post/location':
      displayText = 'post/location 페이지에 대한 텍스트';
      break;
    case '/post':
      displayText = 'post 완료 페이지에 대한 텍스트';
      break;
    case '/post/':
      displayText = 'NoteRead 페이지에 대한 텍스트';
      break;
    default:
      displayText = '';
  }
  
  return (
    <HeaderWarp>
      {displayText}
    </HeaderWarp>
  )
}

const HeaderWarp = styled.header`
  height: 30px;
  background:;
  text-align:center;
  `

export default Header