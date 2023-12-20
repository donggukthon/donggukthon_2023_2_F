import styled from '@emotion/styled'
import { common } from '../../styles/Common'
import Header from '../../components/Layout/Header'
import bg from '../../assets/bg/postBGGrey.png'
import { css } from '@emotion/react'
import ListItem from '../../components/clickList'
import SampleSnowman1 from '../../assets/bg/SampleSnowman.png'
import SampleSnowman2 from '../../assets/bg/SampleSnowman2.png'
import SampleSnowman3 from '../../assets/bg/SampleSnowman3.png'

const PostOtherUserView = ({ userId }) => {
    userId = 3;

    const arrs = [
    {
        name: '꽥꽥이',
        date: '23년 12월 1일',
        location: '중구 필동',
        like: 15,
        imgSrc: SampleSnowman1,
    },
    {
        name: '꿈돌이',
        date: '23년 12월 12일',
        location: '강남구 청담동',
        like: 7,
        imgSrc: SampleSnowman2,
    },
    {
        name: '산타',
        date: '23년 12월 24일',
        location: '중랑구 상봉동',
        like: 20,
        imgSrc: SampleSnowman3,
    },
    ];

    return (
    <>
        <Header />
        <PostBg height100={true}>
        <ul>
            {arrs.map((arr, index) => (
            <ListItem
                pageTypeNormal={true}
                pageTypeDetail="PostOtherUser"
                name={arr.name}
                date={arr.date}
                location={arr.location}
                like={arr.like}
                imgSrc={arr.imgSrc}
                key={index}
            >
                {index === 0 && <p>나를 소개합니다!</p>}
            </ListItem>
            ))}
        </ul>
        </PostBg>
    </>
    );
};




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
export default PostOtherUserView