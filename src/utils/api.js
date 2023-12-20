// import axios from 'axios'
export const BASE_URL = `http://34.22.106.126:8080`
export const REDIRECT_URL = `${BASE_URL}/oauth2/authorization/kakao`
export const ACCESS_TOKEN = localStorage.getItem('access_token')
export const USE_TOKEN = `Bearer ${ACCESS_TOKEN}`
// export default function KakaoMapScript() {
//   useEffect(() => {
//     console.log("start to load kakao maps api")
//     const kakaoMapScript = document.createElement("script");
//     kakaoMapScript.async = false;
//     kakaoMapScript.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=ad72385a83fbad8abbd735a1f9473931&autoload=false";
//     document.head.appendChild(kakaoMapScript);
//   },[])
// }

// const remote = axios.create()
// const response = remote.get(`${BASE_URL}/posting/{postingId}/comment`)



