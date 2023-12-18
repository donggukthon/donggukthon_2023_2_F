import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { common } from '../styles/Common'

const PostBtn= ({to, type, value, onClick}) =>{
  return (
    <StyledLink to={to}>
      <Button type={type} onClick={onClick}>{value}</Button>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  display:block;
  position: fixed;
  width: 100%;
  right: 0;
  padding: 0 ${common.padding};
  bottom: 10%;
`

const Button = styled.button`
  color:${common.colors.white};
  background:${common.colors.pointRed};
  font-weight:${common.fontWeight.bold};
  font-size:{${common.fontSize.fz20}};
  width:100%;
  height:50px;
  line-height:50px;
  border-radius:10px;
`

export default PostBtn