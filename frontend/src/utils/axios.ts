import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/`
    : 'http://localhost/'

const instance = axios.create({
  baseURL,
})

export default instance
