import React from 'react'
import { useSelector } from 'react-redux';
const Overview = () => {
    const { user } = useSelector(state => state.auth);
  return (
    <div>
        <h1 className="text-3xl text-gray-800 mb-4 capitalize">
            Welcome <strong>{user.name}!</strong>
          </h1>      
    </div>
  )
}

export default Overview
