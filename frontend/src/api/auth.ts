import axios, { AxiosResponse } from 'axios'

const getToken = async (log: string, pass: string) => {
  const data = {
    username: log as string | undefined,
    password: pass as string | undefined,
  }
  const url: string = 'http://127.0.0.1:8000/api-token-auth/'
  const response: AxiosResponse = await axios.post(url, data)
  console.log(response.data)
}

export default getToken 
