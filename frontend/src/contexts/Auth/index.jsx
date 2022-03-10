import { createContext, useState } from 'react'
import firebase from './firebaseConfig'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null)

  const login = async (email, password) => {
    console.log('login', email, password)
    try {
      const userCredential = await firebase.login(email, password)
      console.log('userCred', userCredential)
      const { user } = userCredential

      user.getIdToken().then(token => {
        localStorage.setItem('token', token)
      })

      setAuth(user)
    } catch (e) {
      console.log(e)
    }
  }

  const logout = () => {
    console.log('logout')
  }
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
