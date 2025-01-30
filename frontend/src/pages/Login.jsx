import React, { useContext, useEffect, useState } from 'react';
import {ShopContext} from '../context/ShopContext'
// import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async(event) =>{
    event.preventDefault();
   
  } 

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  },[token])

  return (
    <form 
    // onSubmit={onSubmitHandler} 
    className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none w-8 h-[1.5px] bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input type="password" onChange={(e)=>setPassword(e.target.value)} className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      <div className='w-full flex justify-between mt-[-8px] text-sm'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white px-8 py-2 mt-4 font-light'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
}

export default Login;