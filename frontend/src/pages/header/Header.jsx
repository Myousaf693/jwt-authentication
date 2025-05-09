// import React from 'react'
// import {  Link, NavLink } from 'react-router-dom'
// import { useAuth } from '../../store/auth'

// const Header = () => {
//   const { isLoggedIn } = useAuth();
//   return (
//     <header className="w-full h-20 bg-purple-800 flex items-center justify-between px-10 text-white">
//       <div className="text-2xl font-bold">JWT Auth</div>
//       <nav>
//         <ul className="flex space-x-8 text-lg">
//           <li><NavLink to="/" className="hover:text-gray-300">Home</NavLink></li>
//           <li><NavLink to="/shop" className="hover:text-gray-300">Shop</NavLink></li>
//           <li><NavLink to="/about" className="hover:text-gray-300">About</NavLink></li>
//           {
//             isLoggedIn &&
//           <li><NavLink to="/dashboard" className="hover:text-gray-300">Dashboard</NavLink></li>
//           }
          
//         </ul>
//       </nav>
//       {
//         isLoggedIn ? (
//           <Link to="/logout">
//           Logout
//         </Link>  
//         ):(
//         <Link to="/login">
//         Login
//       </Link>
//       )}
//     </header>
//   )
// }

// export default Header
//////////////////////////////////////////////////
import React from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
const {isLoggedIn,  user} = useSelector(state => state.auth)
  return (
    <header className="w-full h-20 bg-purple-800 flex items-center justify-between px-10 text-white">
      <div className="text-2xl font-bold">JWT Auth</div>
      <nav>
        <ul className="flex space-x-8 text-lg">
          <li><NavLink to="/" className="hover:text-gray-300">Home</NavLink></li>
          <li><NavLink to="/shop" className="hover:text-gray-300">Shop</NavLink></li>
          <li><NavLink to="/about" className="hover:text-gray-300">About</NavLink></li>
          {
            isLoggedIn &&
          <li><NavLink to="/dashboard" className="hover:text-gray-300">Dashboard</NavLink></li>
          }
        </ul>
      </nav>
      
      {
        isLoggedIn ? (
          <Link to="/logout">
          Logout
        </Link>  
        ):(
        <Link to="/login">
        Login
      </Link>
      )}
    </header>
  )
}

export default Header
