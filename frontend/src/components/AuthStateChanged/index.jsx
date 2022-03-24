import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/Auth'
import firebase from '../../contexts/Auth/firebaseConfig'
import { useNavigate } from 'react-router-dom'

export const AuthStateChanged = ({ children }) => {
  //get current user from firebase+
  //update auth (value coming from Auth Context)
  //return its children

  const [isLoading, setIsLoading] = useState(true)
  const { setAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  console.log('isloading', isLoading)

  useEffect(() => {
    firebase.getCurrentUser(user => {
      console.log('my anonymous function', user)
      if (user) {
        setAuth(user)
        user.getIdToken().then(token => {
          console.log('settingtoken authstatechanged')
          localStorage.setItem('token', token)
        })
        setIsLoading(false)
        navigate('/transactions')
      } else {
        setIsLoading(false)
        navigate('/')
      }
    })
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return children
}
