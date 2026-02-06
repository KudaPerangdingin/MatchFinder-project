// File: components/AuthProvider.jsx
'use client'

import { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Cek authentication status
    const checkAuth = async () => {
      // Logika authentication di sini
      setLoading(false)
    }
    checkAuth()
  }, [])

  const login = async (email, password) => {
    // Logika login
  }

  const logout = async () => {
    // Logika logout
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)