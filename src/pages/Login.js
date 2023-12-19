import KakaoLogin from 'react-kakao-login'

const KakaoLoginPage = () => {
  const kakaoClientId = 'ad72385a83fbad8abbd735a1f9473931'
  const kakaoOnSuccess = async (data)=>{
      console.log(data)
      const idToken = data.response.access_token  // 엑세스 토큰 백엔드로 전달
  }
  const kakaoOnFailure = (error) => {
      console.log(error);
  };
  return(
      <>
        <KakaoLogin
            token={kakaoClientId}
            onSuccess={kakaoOnSuccess}
            onFail={kakaoOnFailure}
        />
      </>
  )
}

export default KakaoLoginPage