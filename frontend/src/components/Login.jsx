import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })
    const handleLogin = async (e) => {
        e.preventDefault()
        let data = await fetch('http://localhost:3200/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        data = await data.json()
        console.log(data);
        if(data.name){
            localStorage.setItem('user',JSON.stringify(data))
            navigate('/')
        }
        else{
            alert("Please enter correct details")
        }
    }
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">

            {/* Card */}
            <div className="w-full max-w-md bg-white/90 backdrop-blur-sm 
                      border border-gray-200 rounded-lg shadow-sm p-8">

                <h1 className="text-2xl font-semibold text-gray-900 text-center mb-6">
                    Login
                </h1>

                <form className="space-y-4">

                    <input
                        type="email"
                        placeholder="Enter username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        className="w-full px-4 py-2.5 rounded-md
                       border border-gray-300
                       text-gray-900 placeholder-gray-400
                       focus:outline-none focus:border-black"
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        className="w-full px-4 py-2.5 rounded-md
                       border border-gray-300
                       text-gray-900 placeholder-gray-400
                       focus:outline-none focus:border-black"
                    />

                    <button
                        onClick={handleLogin}
                        className="w-full py-2.5 rounded-md
                       bg-black text-white font-medium
                       hover:bg-gray-800 transition"
                    >
                        Login
                    </button>

                </form>

            </div>
        </div>
    )
}

export default Login
