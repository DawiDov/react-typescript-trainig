interface authTokenHandlerType {
  setToken: (arg1: string, arg2: string) => boolean
  getToken: () => string | null
  removeToken: (arg: string) => boolean
  checkToken: () => boolean
}

const authTokenHandler: authTokenHandlerType = {
  setToken: (value, key = 'token') => {
    localStorage.setItem(key, value)
    return true
  },
  getToken: () => localStorage.getItem('token'),
  removeToken: (token = 'token') => {
    localStorage.removeItem(token)
    const isToken = localStorage.getItem(token)
    return !isToken
  },
  checkToken: () => {
    const isToken = localStorage.getItem('token')
    return !!isToken
  },
}

export default authTokenHandler
