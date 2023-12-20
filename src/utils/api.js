import axios from 'axios'

export const BASE_URL = `http://34.22.106.126:8080/`
export const REDIRECT_URL = `${BASE_URL}/oauth2/authorization/kakao`

const remote = axios.create()
// const response = remote.get(`${BASE_URL}/posting/{postingId}/comment`)