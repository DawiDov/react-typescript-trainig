import axios from 'axios'

const getToken = async (authData: { username: string; password: string }) => {
  const url: string = 'http://localhost/api-token-auth/'
  const { data, status } = await axios.post(url, authData)
  if (status === 200) {
    localStorage.setItem('token', data.token)
  } else {
    alert('ошибка авторизации')
  }
}

export default getToken
