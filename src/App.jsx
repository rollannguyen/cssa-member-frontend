import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import Dashboard from './pages/Dashboard'

axios.defaults.baseURL = 'https://cssa-member-frontend.vercel.app'
axios.defaults.withCredentials = true


function App() {

  return (
    <UserContextProvider>
      
    <div/>
    <Toaster position='top-center' toastOptions={{duration: 4000}} />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
      
    </UserContextProvider>
  )
}

export default App
