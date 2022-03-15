import { createContext, useState } from 'react'
import firebase from './firebaseConfig'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null)
  const navigate = useNavigate()

  const signup = async (email, password) => {
    try {
      const userCredential = await firebase.signup(email, password)
      console.log('userCred', userCredential)
      const { user } = userCredential

      user.getIdToken().then(token => {
        localStorage.setItem('token', token)
      })

      setAuth(user)
      navigate('/transactions')
    } catch (e) {
      console.log(e)
    }
  }
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
      navigate('/transactions')
    } catch (e) {
      console.log(e)
    }
  }

  const logout = async () => {
    console.log('logout')
    try {
      await firebase.logout()
      setAuth(null)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <AuthContext.Provider value={{ auth, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
