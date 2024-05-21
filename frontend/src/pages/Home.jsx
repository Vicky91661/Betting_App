import React from 'react'
import Background from '../components/Background'
import { useNavigate } from 'react-router-dom'

function Home() {
   const navigate =  useNavigate()
  return (
    <div>
        <Background/>
        <div className=' absolute z-20  left-1/2  top-[40%]  -translate-x-1/2'>
          <div className='text-white'>
                <h1 className='text-3xl font-medium my-3'>Welcome to the world best game betting site</h1>
                <h1 className='text-xl text-center my-3'>To explore the gaming world first <span className=' text-yellow-500 cursor-pointer'
                onClick={()=>navigate('/signin')}>Sign in</span> or 
                <span onClick={()=>navigate('/signup')} className=' text-yellow-500 cursor-pointer'>{' '}Sign up</span></h1>
          </div>
      </div>
    </div>
  )
}

export default Home