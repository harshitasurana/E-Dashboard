import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-4 px-8 mt-auto border-t border-gray-800">
      <div className="flex items-center justify-between text-sm">

        © {new Date().getFullYear()} All rights reserved


      </div>
    </footer>
  )
}

export default Footer
