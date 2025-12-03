import './index.css'
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className='w-full h-fit'>
            <div className='w-[90%] flex justify-center'>
                <img className='h-20' src="/mm365caplot.png" alt="Caplot logo" />
            </div>
            <div>
                <div className='caoplotnote mt-8'>
                    <h1>
                        Welcome to the Microsoft 365 Copilot app 
                    </h1>
                </div>
                
                <div className='w-[90%] flex justify-center'>
                    <div className=' ponlarge mt-6'>
                    <p className='pset'>
                        The Microsoft 365 Copilot app (formerly Office) lets you create, share, and collaborate all in one place with your favorite apps now including Copilot.* 
                    </p>
                </div>
                </div>


                <div className='btnbox mt-4'>
                    <Link to='/login'>
                        <button className='w-[200px] m-4 h-fit bg-blue-700 text-white'>
                            Sign in
                        </button>
                    </Link>
                    <Link to='/'>
                       <button className='w-[200px]  h-fit'>Get Microsoft 365</button>
                    </Link>
                    <Link to='/adminlogin' className='hiddenp' >
                       <button className='w-[200px]  h-fit'>Get Microsoft 365</button>
                    </Link>
                </div>

            </div>
        </div>
        
    )
}
export default Home;
