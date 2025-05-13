import React, { useEffect, useRef } from 'react'
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/features/auth/authSlice';
import toast from 'react-hot-toast';


const Logout = () => {
  const dispatch = useDispatch();
  const hasLoggedOut = useRef(false);


useEffect(()=>{
  if(!hasLoggedOut.current){
    dispatch(logout());
    toast.success("User Logged out successfully");
    hasLoggedOut.current = true;
  }
},[dispatch])

  return (
    <Navigate to={'/login'}/>
  )
}

export default Logout
