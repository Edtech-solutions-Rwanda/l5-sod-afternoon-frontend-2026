import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

      
        <p className="text-sm">
          © {new Date().getFullYear()} Group X. All rights reserved.
        </p>

    
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer