import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('')
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate=useNavigate()
  
  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  },[])
  const collectData = async(e) => {
    e.preventDefault()
    let data=await fetch('http://localhost:3200/register',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      },      
    })
    data=await data.json()
    console.log(data);
    localStorage.setItem('user',JSON.stringify(data))
    if(data){
      navigate('/')
    }
    
  }
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">

      {/* Card */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm p-8">

        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-6">
          Register
        </h1>

        <form className="space-y-4" onSubmit={collectData}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            className="w-full px-4 py-2.5 rounded-md
                       border border-gray-300
                       text-gray-900 placeholder-gray-400
                       focus:outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="w-full px-4 py-2.5 rounded-md
                       border border-gray-300
                       text-gray-900 placeholder-gray-400
                       focus:outline-none focus:border-black"/>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="w-full px-4 py-2.5 rounded-md
                       border border-gray-300
                       text-gray-900 placeholder-gray-400
                       focus:outline-none focus:border-black"/>

          <button
            className="w-full py-2.5 rounded-md
                       bg-black text-white font-medium
                       hover:bg-gray-800 transition">
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
