import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  const auth = localStorage.getItem('user')
  const logout = () => {
    localStorage.clear()
    navigate('/signup')


  }
  return (
    <nav className="bg-black border-b border-gray-800 px-8 py-4">
  <div className="flex items-center">

    {/* Logo */}
    <img
      src="/logo-hs.png"
      alt="Logo"
      className="h-8 w-auto mr-10"
    />

    {auth ? (

      <ul className="flex items-center text-sm font-medium text-gray-300 w-full">

        {/* Left menu */}
        <li className="mr-8">
          <Link to="/" className="hover:text-white transition">
            Products
          </Link>
        </li>

        <li className="mr-8">
          <Link to="/add-product" className="hover:text-white transition">
            Add Product
          </Link>
        </li>

        <li className="mr-8">
          <Link to="/update" className="hover:text-white transition">
            Update Product
          </Link>
        </li>

        {/* Right menu */}
        <li className="ml-auto mr-6 text-gray-400">
          Hi, <span className="text-white">{JSON.parse(auth).name}</span>
        </li>

        <li>
          <Link
            to="/signup"
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded-md
                       hover:bg-red-700 transition"
          >
            Logout
          </Link>
        </li>

      </ul>

    ) : (

      <ul className="flex items-center justify-end text-sm font-medium text-gray-300 w-full">

        <li className="mr-6">
          <Link to="/signup" className="hover:text-white transition">
            Register
          </Link>
        </li>

        <li>
          <Link to="/login" className="hover:text-white transition">
            Login
          </Link>
        </li>

      </ul>

    )}

  </div>
</nav>





  )
}

export default Nav
