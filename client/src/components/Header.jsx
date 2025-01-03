import React from 'react'
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router';

const Header = ({expanded, setExpanded}) => {
  return (
    <div className='text-5xl font-semibold dark:text-blue-200 text-center flex items-center justify-between p-12'>
      <div className= 'icon text-blue-600 w-15 h-15 flex items-center justify-center cursor-pointer text-4xl p-3 rounded-full dark:hover:bg-slate-700 hover:bg-slate-400' onClick={()=>{setExpanded(!expanded)}}><IoMenu /></div>
      <NavLink to='/'><div className="bg-sky-600 text-blue-200 px-48 py-2 rounded-md">Quizia</div></NavLink>
      <div className="text-3xl px-4 py-2 text-slate-300 dark:text-zinc-900 rounded-md">Logout</div>
    </div>
  )
}

export default Header