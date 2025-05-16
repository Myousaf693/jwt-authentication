
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setAuth } from '../../../redux/features/auth/authSlice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login',{
        method: 'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
      })
      const result = await response.json();
      
      if(response.ok){
        const userRole = result.data.role
        dispatch(setAuth({token: result.data.token, user: result.data}));
        toast.success(result.message)
        setUser({email:"", password:""})
        if(userRole === 2){
          navigate("/dashboard")
        }else{
          navigate('/')
        }
      }else{
        toast.error(result.message)
      }
      
      
    } catch (error) {
      console.log("Login", error)
      
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Login redirect link */}
        <p className="mt-4 text-sm text-center text-gray-600">
        Don't have an account?{' '}
          <Link to="/signup" className="text-purple-700 hover:underline font-medium">
            Signup
          </Link>
        </p>
        <p className="mt-4 text-sm text-center text-gray-600">
          <Link to="/update-password" className="text-purple-700 hover:underline font-medium">
            Forgot Password
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login

