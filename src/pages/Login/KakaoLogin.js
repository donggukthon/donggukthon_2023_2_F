// import { REST_API_KEY, REDIRECT_URI, CLIENT_SECRET } from '../Login/Login';

export default function Auth() {
  const params = new URL(document.URL).searchParams;
  const code = params.get('code');

  return <div>{code}</div>;
}

// import axios from 'axios'
// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// const KakaoLogin = () => {
//   const code = window.location.search   
//   const navigate = useNavigate()

//   useEffect(() => {
//     axios.post(`kakaoLogin${code}`).then((r) => {
//       console.log(r.data)
//       // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
//       localStorage.setItem('name', r.data.user_name) // 일단 이름만 저장했다.
      
//       navigate('/main')
//     })
//   }, [])

//   return <div>로그인 중입니다.</div>
// };

// export default KakaoLogin
