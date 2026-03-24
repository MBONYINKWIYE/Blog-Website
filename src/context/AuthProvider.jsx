/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedToken = localStorage.getItem('accessToken')
    const storedEmail = localStorage.getItem('email')

    return storedToken
      ? {
          accessToken: storedToken,
          email: storedEmail || '',
        }
      : {}
  })

  useEffect(() => {
    if (auth?.accessToken) {
      localStorage.setItem('accessToken', auth.accessToken)
      if (auth?.email) {
        localStorage.setItem('email', auth.email)
      }
      return
    }

    localStorage.removeItem('accessToken')
    localStorage.removeItem('email')
  }, [auth])

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

export default AuthContext
