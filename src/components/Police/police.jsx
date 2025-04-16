import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Police() {
const navigate = useNavigate()
  return (
    <div className="h-screen bg-cover opacity-90 flex justify-center items-center bg-center bg-[url('https://res.cloudinary.com/dyjmgpb5p/image/upload/v1742355389/portrait-male-security-guard-with-uniform_23-2150368732_qyyu5p.jpg')]">
   <div className='relative w-full h-full'>
    <div className='text-white absolute top-40 left-10 text-lg'>Enter location to get Police station information</div>
    <div className=' absolute top-60 left-10'>
     <input type='text' placeholder=''></input>
    </div>
    <div className='absolute top-10 left-10 right-10 flex items-center justify-between '>
      <div className='bg-black text-white px-4 py-2 rounded-lg  opacity-85 hover:cursor-pointer' onClick={()=>navigate("/")}>
        <span>MAIN Portal</span>
         </div>
         <nav className='bg-black bg-opacity-70 text-white px-6 py-2 rounded-lg   absolute left-1/2 -translate-x-1/2 inline-flex gap-x-10'>
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}


  
export default Police