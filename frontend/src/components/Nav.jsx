import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-black border-b border-gray-200 px-8 py-4">
      <ul className="flex items-center gap-8 text-sm font-medium text-gray-200">

        <li>
          <Link to="/" className="hover:text-white transition">
            Products
          </Link>
        </li>

        <li>
          <Link to="/add" className="hover:text-white transition">
            Add Product
          </Link>
        </li>

        <li>
          <Link to="/update" className="hover:text-white transition">
            Update Product
          </Link>
        </li>

        <li className="ml-auto">
          <Link to="/profile" className="hover:text-white transition">
            Profile
          </Link>
        </li>

        <li>
          <Link
            to="/logout"
            className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
          >
            Logout
          </Link>
        </li>

      </ul>
    </nav>
  )
}

export default Nav
