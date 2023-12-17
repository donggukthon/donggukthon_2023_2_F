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
`

const Button = styled.button`
  color:${common.colors.white};
  background:${common.colors.pointRed};
  width:100%;
  `

export default PostBtn