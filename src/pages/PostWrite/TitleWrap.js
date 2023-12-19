import styled from '@emotion/styled'
import { common } from '../../styles/Common'

const TitleWrap = ({title, subTitle}) =>{
  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </>
  );
}

const Title = styled.h2`
  font-weight:${common.fontWeight.bold};
  font-size:{${common.fontSize.fz24}};
  color:${common.colors.postWriteTextColor};
  padding-top:28px;
  margin-bottom:6px;

`

const SubTitle = styled.h3`
  font-weight:${common.fontWeight.light};
  font-size:{${common.fontSize.fz16}};
  color:${common.colors.postWriteTextColor};
  margin-bottom:28px;
`

export default TitleWrap