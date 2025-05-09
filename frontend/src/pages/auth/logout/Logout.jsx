// import React, { useEffect } from 'react'
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../../../store/auth';


// const Logout = () => {
//   const { LogoutUser } = useAuth();
// useEffect(()=>{
// LogoutUser();
// },[LogoutUser])

//   return (
//     <Navigate to={'/login'}/>
//   )
// }

// export default Logout

// ////////////////////////////////////
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/features/auth/authSlice';
import toast from 'react-hot-toast';


const Logout = () => {
  const dispatch = useDispatch();

useEffect(()=>{
dispatch(logout())
},[dispatch])
toast.success("User Logged out successfully")

  return (
    <Navigate to={'/login'}/>
  )
}

export default Logout
