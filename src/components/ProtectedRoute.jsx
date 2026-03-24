import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'

const ProtectedRoute = () => {
  const { auth } = useContext(AuthContext)

  if (!auth?.accessToken) {
    return <Navigate to='/Login' replace />
  }

  return <Outlet />
}

export default ProtectedRoute
