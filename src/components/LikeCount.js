import styled from '@emotion/styled'
import ReadLike from '../assets/icon/ReadLike.svg'
import { common } from '../styles/Common'

const LikeCount = ({isLiked, count}) => {
  return (
    <>
      <Button>
        <img src={ReadLike} alt='좋아요 개수' />
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
export default LikeCount
