import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router';

const Sidebar = ({expanded, setExpanded}) => {
  return (
    <div className='h-100vh w-full px-10 -mt-5'>
      <div className={`p-5 h-full w-[300px] ease-out duration-500 bg-slate-700 rounded-xl ${expanded ? "opacity-100" : " opacity-0 translate-x-[-100%]"}`}>
        <div className="text-blue-200 flex justify-between items-center "><div onClick={()=>{setExpanded(!expanded)}} className=' hover:bg-sky-600 text-3xl p-1 rounded-full cursor-pointer'><RxCross2 /></div><div className='text-3xl text-center -translate-x-1/2'>Everyting</div></div>
        <div className="w-full h-1 rounded-full my-3 bg-slate-300"></div>
        <div className="flex flex-col gap-5 mt-5">
          <NavLink to='/' className="text-center">
            <span className='font-semibold text-xl px-4 py-2 rounded-md hover:bg-sky-600 text-blue-200'>Home</span>
          </NavLink>
          <NavLink to='/create' className="text-center">
            <span className='font-semibold text-xl px-4 py-2 rounded-md hover:bg-blue-200 text-blue-400'>Create Quiz</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar