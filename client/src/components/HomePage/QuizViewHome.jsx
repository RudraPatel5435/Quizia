import React, { useContext } from 'react'
import { AllQuizes } from '../../context/UserContext'
import { NavLink } from 'react-router'

const QuizViewHome = () => {
  const allQuizes = useContext(AllQuizes)

  return (
    <div className='flex flex-wrap flex-col gap-16 p-20'>
        <div className="text-3xl text-neutral-100 bg-slate-400 dark:bg-slate-400 text-center py-2 rounded-lg border-4 border-slate-600 dark:border-slate-600">Your Quizes</div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {allQuizes.map((quiz, idx)=>{
            return(
              <NavLink to={`/quiz/${quiz.title.name}`} key={idx}>
                <div className="w-[300px] h-[169px] rounded-xl bg-yellow-400 p-2">
                  <div className="h-full w-full p-3 text-center bg-yellow-100 text-yellow-400 rounded-md flex flex-col items-center justify-center text-3xl">
                    <div className="">{quiz.title.name}</div>
                    <div className="text-sm">{quiz.desc.name}</div>
                  </div>
                </div>
            </NavLink>
          )})}
        </div> 
      </div>
  )
}

export default QuizViewHome