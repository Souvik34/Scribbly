/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Password from '../../components/Input/Password'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'
import { useDispatch } from 'react-redux'
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice'
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()

    if(!validateEmail(email))
    {
      setError("Please enter a valid email address")
      return
    }
    if(!password)
    {
      setError("Please enter a password")
      return
    }

    setError("")
    console.log("Form submitted")

    try {
      dispatch(signInStart())

      // Ensure the URL is correct and the server is running
      const res = await axios.post("http://localhost:3000/api/auth/signin", 
        {email, password}, 
        {withCredentials: true}
      )
      if(res.data.success === false)
      {
        console.log(res.data);
        dispatch(signInFailure(res.data.message))
      } else {
        dispatch(signInSuccess(res.data.message))
        navigate("/")
      }

    } catch (error) {
      console.log(error);
      dispatch(signInFailure(error.message))
    }
  }

  return (
    <div className='flex items-center justify-center mt-28'>
      <div className='w-96 border-rounded bg-white px-7 py-10'>
        <form onSubmit={handleLogin}>
          <h4 className='text-3xl flex justify-center mb-7'>Login</h4>
          <input type="text" 
          placeholder='Email' 
          className='input-box' 
          value={email}
          required
          onChange={(e)=> setEmail(e.target.value)} />

          <Password 
          value={password} 
          required
          onChange={(e) => setPassword(e.target.value)}/>

          <error className='text-red-500 text-sm'>{error}</error>
          <button type='submit' className='btn-primary'>Login</button>

          <p className="mb-4 text-center ">
            New on Scribbly? {" "} <Link to={"/signup"}
            className="text-indigo-500  hover:text-indigo-500 underline">Create an account
            </Link> 
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login