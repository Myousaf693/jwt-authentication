
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './pages/header/Header'
import Login from './pages/auth/login/Login'
import Signup from './pages/auth/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import Home from './pages/home/Home'
import Logout from './pages/auth/logout/Logout'
import User from './pages/dashboard/User'
import Overview from './pages/dashboard/Overview'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path="/dashboard/" element={<Dashboard />}>
          <Route index element={<Overview/>}/>
          <Route path='overview' element={<Overview/>}/>
          <Route path='users' element={<User/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
