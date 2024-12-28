import React from 'react'
import { LuPlus } from "react-icons/lu";

const CreateQuiz = () => {
  return (
    <div>
      <div className="cursor-pointer mt-10 p-3 text-4xl h-[150px] w-[300px] rounded-xl text-blue-600 bg-blue-400 dark:bg-blue-200 dark:text-blue-200 font-bold">
        <div className="bg-slate-300 dark:bg-zinc-900 rounded-lg w-full h-full flex items-center justify-center flex-col">
          <div className="">Create Quiz</div>
          <div className="mt-3 rounded-full"><LuPlus /></div>
        </div>
      </div>
    </div>
  )
}

export default CreateQuiz