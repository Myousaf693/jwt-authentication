import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'


const User = () => {
    const token = useSelector((state) => state.auth.token);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('')

    const fetchAllUsers = async () =>{
        if(!token || !isLoggedIn){
            setError('Please login');
            return;
        }
        try {
            const response = await axios.get("http://localhost:5000/api/users",{
                headers:{
                    Authorization: token,
                }
            });
            const result = response.data.data;
            console.log("get users response", result);
            setUsers(result)
        } catch (error) {
            console.log("Error fetching users", error);
            setError("Failed to fetch users")
            
        }
    }
    useEffect(()=>{
        fetchAllUsers();
    },[token, isLoggedIn])
if(error){
    return(
        <p className='text-red-500'>Failed to fetch users</p>
    )
}
  return (
    <div className="p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">All Users</h2>
{ users.length > 0 ? (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Name</th>
                        <th className="py-2 px-4 border-b text-left">Email</th>
                        <th className="py-2 px-4 border-b text-left">Age</th>
                        <th className="py-2 px-4 border-b text-left">Role</th>
                    </tr>
                </thead>
                <tbody>
                   {users.map(((user)=>
                    <tr key={user._id} className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b">{user.name}</td>
                        <td className="py-2 px-4 border-b">{user.email}</td>
                        <td className="py-2 px-4 border-b">{user.age}</td>
                        <td className="py-2 px-4 border-b">{user.role}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
      ): (<p>No User Available right Now</p>)}
    </div>
  )
}

export default User
