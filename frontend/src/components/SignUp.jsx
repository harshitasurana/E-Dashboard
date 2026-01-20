import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) navigate('/')
  }, [])

  const collectData = async (e) => {
    e.preventDefault()
    let data = await fetch('http://localhost:3200/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    data = await data.json()
    localStorage.setItem('user', JSON.stringify(data.data))
    localStorage.setItem('token', JSON.stringify(data.auth))
    if (data) navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-br from-gray-100 to-gray-200">

      {/* Glass Card */}
      <div className="w-full max-w-md
                      bg-white/70 backdrop-blur-md
                      border border-white/40
                      rounded-xl shadow-xl p-8
                      animate-fadeIn">

        <h1 className="text-2xl font-semibold text-gray-900 text-center">
          Create Account
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          Register to manage your products
        </p>

        <form className="space-y-4" onSubmit={collectData}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-md
                       bg-white/80
                       border border-gray-300
                       placeholder-gray-400
                       focus:outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-md
                       bg-white/80
                       border border-gray-300
                       placeholder-gray-400
                       focus:outline-none focus:border-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 rounded-md
                       bg-white/80
                       border border-gray-300
                       placeholder-gray-400
                       focus:outline-none focus:border-black"
          />

          <button
            className="w-full py-2.5 rounded-md
                       bg-black text-white font-medium
                       hover:bg-gray-800
                       active:scale-[0.98]
                       transition"
          >
            Create Account
          </button>

        </form>
      </div>
    </div>
  )
}

export default SignUp
