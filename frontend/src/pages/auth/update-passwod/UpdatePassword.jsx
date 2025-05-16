import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const { token, user } = useSelector(state => state.auth);
    const [password, setPassword] = useState({
        userId:user.id,
        oldPassword: '',
        newPassword:'',
    })
console.log("user id from state", password.userId)

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setPassword(prev =>({...prev,[name]:value}))
    }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/update-password',{
                method:"POST",
                headers:{
                    Authorization: token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(password),
            });
            const resResult =  await response.json();

            if(response.ok){
                toast.success(resResult.message)
                // dispatch(setAuth({user.: result.data}));
              setPassword({oldPasswod:"", newPassword:""})
            }
            else{
                toast.error(resResult.message)
            }
        } catch (error) {
            console.log('update password',error)
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Update Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">Old Password</label>
            <input
              type="password"
              name="oldPassword"
              id="oldPassword"
              value={password.oldPassword}
              onChange={handleChange}
              placeholder="Enter Your Old Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              value={password.newPassword}
              onChange={handleChange}
              placeholder="Enter Your New Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition duration-300"
          >
            Update Password
          </button>
        </form>

        {/* Login redirect link */}
        <p className="mt-4 text-sm text-center text-gray-600">
        Are your remember your Passowrd?{' '}
          <Link to="/login" className="text-purple-700 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default UpdatePassword
