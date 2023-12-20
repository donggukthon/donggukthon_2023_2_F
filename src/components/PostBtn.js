import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { common } from '../styles/Common'
import ButtonBG from '../assets/bg/ButtonBG.png'

const PostBtn= ({to, type, value, onClick}) =>{
  return (
    // <StyledLink to={to}>
      <Button type={type} onClick={onClick}>
        {value}
        <img src={ButtonBG} alt={value}/>
      </Button>
    // </StyledLink>
  )
}

// const StyledLink = styled(Link)`
  // display:block;
  // position: fixed;
  // width: 100%;
  // right: 0;
  // padding: 0 ${common.padding};
  // bottom: 10%;
// `

const Button = styled.button`
  display:block;
  position: fixed;
  width: 100%;
  right: 0;
  padding: 0 ${common.padding};
  bottom: 10%;

  color:${common.colors.white};
  background:url() ;
  font-weight:${common.fontWeight.bold};
  font-size:{${common.fontSize.fz20}};
  line-height:50px;
  border-radius:10px;
  img{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    z-index:-1;
  }
`

export default PostBtn