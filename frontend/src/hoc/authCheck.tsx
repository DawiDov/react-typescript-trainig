import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useTypedSelector } from 'redux/store'

const RequireAuth: React.FC<any> = ({ children }) => {
  const location = useLocation()
  const { isAuth } = useTypedSelector((state) => ({
    isAuth: state.authReducer.isAuth,
  }))
  if (!isAuth) {
    return <Navigate to="/Login" replace state={{ from: location }} />
  }

  return children
}
export default RequireAuth
