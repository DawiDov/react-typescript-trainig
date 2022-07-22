import axios from 'axios'

interface Token {
  token: string
}
const getToken = (authData: { username: string; password: string }) => {
  const url: string = 'http://localhost/api-token-auth/'
  axios
    .post(url, authData)
    .then(({ data }: { data: Token }) =>
      localStorage.setItem('token', data.token),
    )
}
export default getToken
