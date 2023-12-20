import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { common } from '../../styles/Common'
import Preview from '../../assets/icon/Preview.png'
import cloud from '../../assets/bg/Cloud.png'

const Bottom = () =>{
const location = useLocation()

return (
    <HeaderWarp>
    <Cloud src={cloud} alt='구름 배경화면' />
    </HeaderWarp>
)
}

const HeaderWarp = styled.header`
z-index:1;
height: 0px;
line-height: 50px;
background:;
text-align:center;
position:sticky;
top:0;
width:100%;
background:${common.colors.white};
display:flex;
align-items:center;
justify-content:center;
font-size:${common.fontSize.fz16};
`
const WriteProgressWrap = styled.ul`
display:flex;
li{
    width:70px;
    height:15px;
    background:${common.colors.whiteF3};
    border-radius:35px;
    margin-right:11px;
    &:last-child{
    margin-right:0;
    }
    &.active{
    background:${common.colors.pointRed};
    }
}
`
const Cloud = styled.img`
position:absolute;
bottom:0;
bottom: 0%;
width: 100%;
z-index:-1;
`
export default Bottom