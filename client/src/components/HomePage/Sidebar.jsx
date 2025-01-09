import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router';
import QuizViewSide from '../Decor/QuizViewSide';

//bg-blue-200 blue-400

const Sidebar = ({expanded, setExpanded}) => {
  return (
    <div className='hidden md:block h-100vh w-full px-10 -mt-5'>
      <div className={`p-5 h-full w-[300px] ease-out duration-500 bg-slate-700 rounded-xl ${expanded ? "block" : "hidden"}`}>
        <div className="text-blue-200 flex justify-between items-center "><div onClick={()=>{setExpanded(!expanded)}} className=' hover:bg-sky-600 text-3xl p-1 rounded-full cursor-pointer'><RxCross2 /></div><div className='text-3xl text-center -translate-x-1/2'>Everyting</div></div>
        <div className="w-full h-1 rounded-full my-3 bg-slate-300"></div>
        <div className="flex flex-col gap-3 font-semibold text-2xl">
          <NavLink to='/' className="group text-center">
          <div className="rounded-xl group-hover:bg-blue-200 p-2">
              <div className="p-2  group-hover:bg-sky-600 text-blue-200 rounded-md  text-2xl">
                Home
              </div>
            </div>
          </NavLink>
          <NavLink to='/create' className="group text-center">
          <div className="rounded-xl group-hover:bg-blue-400 p-2">
              <div className="p-2 group-hover:bg-blue-200 text-blue-400 rounded-md text-2xl">
                CreateQuiz
              </div>
            </div>
          </NavLink>
        </div>
        <QuizViewSide />
      </div>
    </div>
  )
}

export default Sidebar