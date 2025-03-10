/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import Password from '../../components/Input/Password'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'
import Navbar from '../../components/Navbar'
import axios from 'axios'



const Signup = () => {

  const[name, setName] = useState('')
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()
  const handleSignup = async(e)=>{
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
    if(!name)
    {
      setError("Please enter a name")
      return
    }
    setError("")
    console.log("Form submitted")

    // Swal.fire({
    //   icon: 'success',
    //   title: 'Signup Successful',
    //   text: 'You have successfully signed up!',
    // }).then(() => {
    //   // Reset form
    //   setName('');
    //   setEmail('');
    //   setPassword('');
    //   // Redirect to home page
    //   navigate('/');
    // });


    try {
      const res = await axios.post("http://localhost:3000/api/auth/signup", 
        {name: name, email, password},
         {withCredentials: true}
      )
      if(res.data.success === false)
      {
        setError(res.data.message)
        return
      }
      setError("")
      navigate("/login")

    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }
  }
  return (
    <>
    {/* <Navbar userInfo={userInfo}/> */}
    <div className='flex items-center justify-center mt-28'>
    <div className='w-96 border-rounded bg-white px-7 py-10'>
      <form onSubmit={handleSignup}>
        <h4 className='text-3xl flex justify-center mb-7'>Sign-Up</h4>
        <input type="text" 
        placeholder='Name' 
        className='input-box' 
        value={name}
        required
        onChange={(e)=> setName(e.target.value)} />

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
          <button type='submit' className='btn-primary'>Sign Up</button>

          <p className="mb-4 text-center ">
            Already have an account? {" "} <Link to={"/login"}
            className="text-indigo-500  hover:text-indigo-500 underline">Login
            </Link> 
          </p>
      </form>
    </div>
  </div>
    </>
  )
}

export default Signup