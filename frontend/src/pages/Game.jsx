import React from 'react'
import { MdSportsCricket } from "react-icons/md";
import { IoFootballSharp } from "react-icons/io5";
import logo from "/logo.png"
function Game() {
    const categories = ["Cricket","Football"]
  return (
    
    <div className='bg-blue-900 h-[100vh] text-white'>
         <img className='w-20 md:w-32' src={logo} alt="" />
        <h1 className='text-center text-8xl mb-10'>Explore the games</h1>
        <div className=' flex gap-10 justify-center'>
            <div className=' w-44 py-5 bg-black bg-opacity-40 rounded-lg shadow-xl flex flex-col justify-center items-center
             gap-3 cursor-pointer'>
                <h1 className='text-3xl'>Cricket</h1>
                <MdSportsCricket className='text-5xl'/>
            </div>
            <div className=' w-44 bg-black bg-opacity-40 rounded-lg shadow-xl flex flex-col justify-center items-center 
            gap-3 cursor-pointer'>
                <h1 className='text-3xl'>Football</h1>
                <IoFootballSharp className='text-5xl'/>
            </div>
        </div>
        
    </div>
  )
}

export default Game