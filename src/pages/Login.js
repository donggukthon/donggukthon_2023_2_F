import axios from 'axios'
import styled from '@emotion/styled'
import KakaoLoginImg from '../assets/icon/KakaoLoginImg.png'
import CloseRed from '../assets/icon/CloseRed.png'
import { common } from '../styles/Common'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { setToken } from '../redux/tokenSlice'
import { BASE_URL, REDIRECT_URL} from '../utils/api'

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const ACCESS_TOKEN = useSelector((state) => state.token.value)

  const loginHandler = () => {
    window.location.href = REDIRECT_URL
    const checkInterval = setInterval(() => {
      console.log(window.location.origin)
      if (window.location.href === REDIRECT_URL) {
        // 리다이렉션이 완료되었을 때의 로직
        
        const tokenValue = window.location.search.split('=')
        dispatch(setToken(tokenValue[1]))
        clearInterval(checkInterval)
      }
    }, 100); // 100ms 간격으로 확인
  }

  useEffect(() => {
    // Axios 인스턴스 생성  
    axios.post({
      baseURL: BASE_URL,  // API 엔드포인트의 기본 URL
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
      },
    });
  }, [ACCESS_TOKEN])

  const BackLocation = () => {  
    navigate(-1)
  }
  return (
    <KakaoPopupWrap>
      <KakaoPopup>
        <CloseBtn src={CloseRed} alt='닫기' onClick={BackLocation}/>
        <h2>LOGIN</h2>

        <div>
          <p>간편하게 로그인하고</p>
          <Bold>편리한 기능을 사용해보세요. </Bold>
        </div>

        <button type='button' onClick={loginHandler}>
          <img src={KakaoLoginImg} alt='카카오로 3초 만에 시작하기' />
        </button>
      </KakaoPopup>
    </KakaoPopupWrap>
  )
}

const KakaoPopupWrap = styled.div`
  background:${common.colors.postWriteTextColor};
  display:flex;
  align-items:center;
  justify-content:center;
  height:100vh;
`

const KakaoPopup = styled.div`
  position:relative;
  background:${common.colors.beige};
  width:280px;
  height:257px;
  text-align:center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius:8px;
  border:1px solid ${common.colors.pointRed};
  h2{
    font-size:${common.fontSize.fz20};
    font-weight:${common.fontWeight.bold};
    margin-bottom:34px;
  }
`

const Bold = styled.p`
  font-weight:${common.fontWeight.bold};
  line-height:1.4;
  margin-bottom:33px;
`
const CloseBtn = styled.img`
  position:absolute;
  top:10px;
  right:10px;
`
export default LoginPage 