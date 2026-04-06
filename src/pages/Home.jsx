import React from 'react'
import { FaBookJournalWhills } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
        <header className=' flex
         justify-between  px-8  py-4  ' >
    <h1 className=' font-bold text-3xl  text-blue-700 '> GROUP  X</h1>
    <div className=' flex gap-8 '>
        <button className=' bg-blue-700  text-white px-4  py-2   rounded-md   text-md '>Home</button>
        <button className=' rounded-md  px-4  py-2  hover:bg-gray-300 '>Register</button>
        <button className=' rounded-md  px-4  py-2  hover:bg-gray-300 '>Students </button>
    </div>
        </header>

        <div className=' relative overflow-hidden   border-2  border-red-500  min-h-[90vh]  flex 
        flex-col  justify-center  items-center   text-white gap-8       '>
            <img 
            src="https://i0.wp.com/goldenrwanda.com/wp-content/uploads/2023/11/16-Days-East-Africa-Gorilla-Adventure-Uganda-DRC-Rwanda.jpg?fit=600%2C540&ssl=1" 
            alt="hero  bg "
            className=' absolute  inset-0  w-full object-cover '
             srcset="" />
             <div className=' absolute  inset-0 w-full bg-blue-700/50'></div>


           <div className=' relative flex flex-col  gap-8 z-10'>
             <h3 className=' font-bold text-5xl '>Welcome</h3>
            <h2 className='font-bold text-7xl'>GROUP X</h2>
            <p className=' text-xl '>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <div className=' flex  gap-8 '>
                <button className=' bg-blue-700  text-xl  px-8  py-4  font-bold  rounded-md '>Register Now </button>
                <button className=' border-white  border-2  text-white  text-xl  px-8  py-4  font-bold  rounded-md '>STUDENTS </button>
                </div>
        </div>
           </div>

           <div className=' flex flex-col justify-center items-center  gap-8 py-32   '>
            <h3 className=' font-bold text-3xl text-blue-700  '> WHY   GROUP  X </h3>
            
           <div className=' flex gap-8  '>
            <div className=' border-2  border-blue-400  rounded-md  p-16   bg-gray-300 flex  flex-col  gap-4  items-center '>
                <FaBookJournalWhills />
                <p className='text-md font-bold '>Lorem, ipsum.</p>
                <p className='text-md font-bold '>Lorem, ipsum dolor.</p>
                <p className='text-md font-bold '>lorem2 </p>
            </div>
            <div className=' border-2  border-blue-400  rounded-md  p-16   bg-gray-300 flex  flex-col  gap-4  items-center '>
                <FaBookJournalWhills />
                <p className='text-md font-bold '>Lorem, ipsum.</p>
                <p className='text-md font-bold '>Lorem, ipsum dolor.</p>
                <p className='text-md font-bold '>lorem2 </p>
            </div>
            <div className=' border-2  border-blue-400  rounded-md  p-16   bg-gray-300 flex  flex-col  gap-4  items-center '>
                <FaBookJournalWhills />
                <p className='text-md font-bold '>Lorem, ipsum.</p>
                <p className='text-md font-bold '>Lorem, ipsum dolor.</p>
                <p className='text-md font-bold '>lorem2 </p>
            </div>
           </div>
            
           </div>
    </div>
  )
}

export default Home