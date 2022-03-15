import { Routes, Route } from 'react-router-dom'

import { NavBar } from '../NavBar'
import { TransactionsList } from '../TransactionsList'
import { Login } from '../Auth/Login'
import { Signup } from '../Auth/Signup'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth'

export const AppRoutes = () => {
  const { auth } = useContext(AuthContext)
  console.log('auth', auth)
  if (auth) {
    //we have a log in user
    return (
      <div className='layout'>
        <NavBar />
        <Routes>
          <Route path='transactions' element={<TransactionsList />} />
        </Routes>
      </div>
    )
  }
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}
