import React from 'react'
import { Link } from 'react-router-dom'

const HeaderPage = () => {
  return (
    <header className=' flex
         justify-between  px-8  py-4   ' >
      <Link to='/' className=' font-bold text-3xl  text-blue-700 '> GROUP  X</Link>
      <div className=' flex gap-8 '>
        <Link to='/' className=' bg-blue-700  text-white px-4  py-2   rounded-md   text-md '>Home</Link>
        <Link to="/register" className=' rounded-md  px-4  py-2  hover:bg-gray-300 '>Register</Link>
        <button className=' rounded-md  px-4  py-2  hover:bg-gray-300 '>Students </button>
      </div>
    </header>
  )
}

export default HeaderPage