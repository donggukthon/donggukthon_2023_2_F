import styled from '@emotion/styled'
import { common } from '../../styles/Common'
import Header from '../../components/Layout/Header'
import bg from '../../assets/bg/postBGGrey.png'
import { css } from '@emotion/react'

const PostOtherUserView = () =>{
  return (
    <>
      <Header />
      <PostBg height100={true}>
        
      </PostBg>
    </>
  );
}

const PostBg = styled.section`
  padding:48px ${common.padding} 0 ;
  background: ${(props) => props.notBg ? `${common.colors.white}` : `url(${bg}) no-repeat center/cover`};
  height: ${(props) => props.height100 ? `100vh` : ``};
  ${(props) =>
    props.bottomFixed &&
    css`
      position: fixed;
      bottom: 0;
      width:100%;
      padding:0 20px 14px 20px;
    `}
`
const ColorGrey = styled.span`
  color: ${common.colors.postReadGrey};
`
