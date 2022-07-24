import axios, { AxiosResponse } from 'axios'

const getToken = (authData: { username: string; password: string }) => {
  const url: string = 'http://localhost/api-token-auth/'
  axios.post(url, authData).then((resp: AxiosResponse) => {
    console.log(resp)
    localStorage.setItem('token', resp.data.token)
  })
}
export default getToken
