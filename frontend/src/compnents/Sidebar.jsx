import React from 'react'
import { FiHome, FiUsers, FiBarChart2 } from 'react-icons/fi'
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-6 hidden md:block h-screen">
      <h2 className="text-2xl font-bold text-purple-700 mb-8">Dashboard</h2>
      <nav className="space-y-4">
        <NavLink to="overview" className="flex items-center gap-3 text-gray-700 hover:text-purple-700 transition">
          <FiHome className="text-xl" /> Overview
        </NavLink>
        <NavLink to="users" className="flex items-center gap-3 text-gray-700 hover:text-purple-700 transition">
          <FiUsers className="text-xl" /> Users
        </NavLink>
        <NavLink to="#" className="flex items-center gap-3 text-gray-700 hover:text-purple-700 transition">
          <FiBarChart2 className="text-xl" /> Graphs
        </NavLink>
        <NavLink to="/logout" className="flex items-center gap-3 text-gray-700 hover:text-purple-700 transition">
          <CiLogout className="text-xl" /> Logout
        </NavLink>
        
      </nav>
    </aside>
  )
}

export default Sidebar
