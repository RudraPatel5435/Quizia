import React from 'react'
import { LuPlus } from "react-icons/lu";
import { NavLink } from 'react-router';

const CreateQuiz = () => {
  return (
    <NavLink to='/create'>
      <div>
        <div className="cursor-pointer mt-10 p-3 text-4xl h-[150px] w-[300px] rounded-xl bg-blue-400 text-blue-400 font-bold">
          <div className="bg-blue-200 rounded-lg w-full h-full flex items-center justify-center flex-col">
            <div className="">Create Quiz</div>
            <div className="mt-3 rounded-full"><LuPlus /></div>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default CreateQuiz