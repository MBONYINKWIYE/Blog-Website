import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'

const AdminRoute = () => {
  const { adminAuth } = useContext(AuthContext)

  if (!adminAuth?.isAdmin) {
    return <Navigate to='/admin/login' replace />
  }

  return <Outlet />
}

export default AdminRoute
