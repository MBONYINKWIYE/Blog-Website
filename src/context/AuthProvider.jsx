/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedToken = localStorage.getItem('accessToken')
    const storedEmail = localStorage.getItem('email')

    return storedToken ? { accessToken: storedToken, email: storedEmail || '' } : {}
  })

  const [adminAuth, setAdminAuth] = useState(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true'
    const adminEmail = localStorage.getItem('adminEmail')

    return isAdmin ? { isAdmin: true, email: adminEmail || '' } : { isAdmin: false }
  })

  useEffect(() => {
    if (auth?.accessToken) {
      localStorage.setItem('accessToken', auth.accessToken)
      if (auth?.email) localStorage.setItem('email', auth.email)
      return
    }

    localStorage.removeItem('accessToken')
    localStorage.removeItem('email')
  }, [auth])

  useEffect(() => {
    if (adminAuth?.isAdmin) {
      localStorage.setItem('isAdmin', 'true')
      localStorage.setItem('adminEmail', adminAuth?.email || '')
      return
    }

    localStorage.removeItem('isAdmin')
    localStorage.removeItem('adminEmail')
  }, [adminAuth])

  return <AuthContext.Provider value={{ auth, setAuth, adminAuth, setAdminAuth }}>{children}</AuthContext.Provider>
}

export default AuthContext
