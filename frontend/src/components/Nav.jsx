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
      <ul className="flex items-center text-sm font-medium text-gray-300">

        {/* Left menu */}
        <li className="mr-8">
          <Link to="/" className="hover:text-white transition">
            Products
          </Link>
        </li>

        <li className="mr-8">
          <Link to="/add" className="hover:text-white transition">
            Add Product
          </Link>
        </li>

        <li className="mr-8">
          <Link to="/update" className="hover:text-white transition">
            Update Product
          </Link>
        </li>

        {/* Right menu */}
        <li className="ml-auto mr-8">
          <Link to="/profile" className="hover:text-white transition">
            Profile
          </Link>
        </li>

        {auth ? (
          <li>
            <Link
              to="/signup"
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Logout
            </Link>
          </li>
        ) : (
          <>
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
          </>
        )}

      </ul>
    </nav>


  )
}

export default Nav
