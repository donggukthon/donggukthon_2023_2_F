import styled from '@emotion/styled'
import { common } from '../styles/Common'
import { css } from '@emotion/react'
import ReadComments from '../assets/icon/ReadComments.svg'
import Camera from '../assets/icon/Camera.png'
import Local from '../assets/icon/Local.png'
import Stamp from '../assets/icon/Stamp.png'
import LikeCount from './LikeCount'

const ListItem = ({pageTypeNormal, pageTypeDetail, name, date, location, like, imgSrc}) =>{
return (
    <>
    <List type={pageTypeDetail}>
        <SnowmanImageBox>
        <img src={imgSrc} alt='눈사람 이미지'/>
        </SnowmanImageBox>
        <SmowmanInfoBox>
        <h2>{name}</h2>
        {
            pageTypeNormal 
            ? 
            (
            <>
                <p>
                <img src={Camera} alt='등록 날짜 아이콘'/> {date}
                </p>
                <p>
                <img src={Local} alt='위치 아이콘'/> {location}
                </p>
            </>
            ) : (
            <>
                <p>
                2023.12.24
                </p>
                <p>
                <img src={ReadComments} alt='댓글 아이콘'/> 우와 너무 귀여워요! {/* 상태값으로 로 svg색상 변경해서 쓰세요! */}
                </p>
            </>
            )
        }
        </SmowmanInfoBox>
        <SnowmanLikeBox>
        <img src={Stamp} alt='스탬프'/>
        </SnowmanLikeBox>
    </List>
    </>
);
}

// 말줄임표
const ellipsis = css` 
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
word-break: break-all;
`

const List = styled.li`
height:125px;
margin-bottom:20px;
padding:20px;
border-radius:12px;
display: flex;
&:Last-child{
    margin-bottom:0;
}
${(props) => props.type === 'PostOtherUser' && css`
background: ${common.colors.otherUserList};
border-top:4px solid ${common.colors.pointRed};
border-bottom:4px solid ${common.colors.pointRed};
position:relative;
overflow:hidden;
&::before{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
    top: 0;
    background-color: #F0E6DA;
}
&::after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
    bottom: 0;
    background-color: #F0E6DA;
}
`}
`

const SnowmanImageBox = styled.div`
width:85px;
height:85px;
overflow:hidden;
display: flex;
align-items: center;
justify-content: center;
border-radius:8px;
img{
    height:100%;
}
`
const SmowmanInfoBox = styled.div`
flex: 1;
margin-left: 24px;
min-width: 120px;
h2{
    font-weight:${common.fontWeight.bold};
    font-size:${common.fontSize.fw16};
    margin-bottom:12px;
}
p{
    color:#525252;
    font-size:${common.fontSize.fw14};
    margin-bottom:5px;
    ${ellipsis}
}
img{
    vertical-align:middle;
}
`

const SnowmanLikeBox = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
margin-left: 10px;

`
export default ListItem