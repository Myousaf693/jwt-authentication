import React from 'react'
import { FiSearch, FiUser } from 'react-icons/fi'

const Topbar = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Search bar */}
      <div className="flex items-center gap-3 w-full max-w-md">
        <FiSearch className="text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      {/* User icon */}
      <div>
        <FiUser className="text-2xl text-gray-700" />
      </div>
    </header>
  )
}

export default Topbar
