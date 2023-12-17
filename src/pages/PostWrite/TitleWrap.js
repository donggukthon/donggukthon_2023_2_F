import styled from '@emotion/styled'

const TitleWrap = ({ title, subTitle}) =>{
  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </>
  );
}

const Title = styled.h2`
  font-weight:800;
`

const SubTitle = styled.h3`
  font-weight:400;
  font-size:12px;
  color:#cecece;
`

export default TitleWrap