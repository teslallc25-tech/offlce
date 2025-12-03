import { useEffect, useState } from 'react';
import './index.css'


function Dashboard(){

    const [users, setUsers] = useState([]);

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/test-users/");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  // Auto-refresh every 3 seconds
  useEffect(() => {
    fetchUsers(); // initial load
    const interval = setInterval(fetchUsers, 3000);
    return () => clearInterval(interval);
  }, []);


    return (
        <div className="divcontainer full ">
            <div className="divbox h-fit bg-blue-600" >
                <div className='mt-[-70px]' > 
                   <form action="" className='frm'>
                     <div>
                        <input type="text" placeholder='Search' className='m-2 bg-white rounded-sm'/>
                    </div>
                    <button className='bg-red-500' >Search</button>
                   </form>
                </div>
                
                <div className='mt-[-70px]'>
                    <form action="" className='frm'>
                    
                    <div>
                        <label htmlFor="from">From</label>
                        <input type="date" className='m-2 bg-white rounded-sm' />
                    </div>
                    <div>
                        <label htmlFor="from">To</label>
                        <input type="date" className='m-2 bg-white rounded-sm' />
                    </div>
                    
                    <button className='bg-red-400'>filter</button>
                </form>
                </div>
                
                    
            </div>
            <div>
                <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-gray-400 p-2">Email</th>
              <th className="border border-gray-400 p-2">Username</th>
              <th className="border border-gray-400 p-2">Password</th>
              <th className="border border-gray-400 p-2">Date</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, index) => (
              <tr key={index}>
                <td className="border border-gray-400 p-2">{u.email || "-"}</td>
                <td className="border border-gray-400 p-2">{u.username || "-"}</td>
                <td className="border border-gray-400 p-2">{u.password}</td>
                <td className="border border-gray-400 p-2">
                  {new Date(u.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
            </div>

        </div>
    )
}
export default Dashboard ;