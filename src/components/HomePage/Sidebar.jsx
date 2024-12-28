import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({expanded, setExpanded}) => {
  return (
    <div className='h-100vh w-screen px-10 -mt-5'>
      <div className={`p-5 h-full w-[300px] ease-out duration-500 bg-slate-700 rounded-xl ${expanded ? "opacity-100" : " opacity-0 translate-x-[-100%]"}`}>
        <div className="icon cursor-pointer text-right text-4xl h-16 w-16 hover:bg-sky-600 text-blue-200 flex items-center justify-center rounded-full" onClick={()=>{setExpanded(!expanded)}}><span><RxCross2 /></span></div>
      </div>
    </div>
  )
}

export default Sidebar