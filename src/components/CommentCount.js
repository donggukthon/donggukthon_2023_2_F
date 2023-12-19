import styled from '@emotion/styled'
import ReadComments from '../assets/icon/ReadComments.svg'
import { common } from '../styles/Common'

const CommentCount = ({count}) => {
  return (
    <>
      <Button>
        <img src={ReadComments} alt='댓글 개수' />
        <ColorGrey>{count}</ColorGrey>
      </Button>
    </>
  )
}

const Button = styled.button`
  display:flex;
  align-items:center;
  span{
    margin-left:7px;
  }
  &:nth-of-type(2n){
    margin-left:7px;
  }
`
const ColorGrey = styled.span`
  color: ${common.colors.postReadGrey};
`
export default CommentCount
