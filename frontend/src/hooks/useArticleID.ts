import { useLocation } from 'react-router-dom'

const useArticleID = () => {
  const location = useLocation()
  const loc = location.pathname.split('/')
  return +loc[loc.length - 1]
}

export default useArticleID
