import React, { useContext } from 'react'
import { AllQuizes } from '../../context/UserContext'
import { NavLink } from 'react-router'

const QuizViewSide = () => {
  const allQuizes = useContext(AllQuizes)

  return (
    <div className="mt-5 flex flex-col gap-5">
      {allQuizes.map((quiz, idx) => {
        return (
          <NavLink to={`/quiz/${quiz.title.name}`} key={idx} className="group">
            <div className=" rounded-xl group-hover:bg-yellow-400 p-2">
              <div className="h-full w-full p-2 text-center group-hover:bg-yellow-100 text-yellow-400 rounded-md flex flex-col items-center justify-center text-2xl">
                <div className="">{quiz.title.name}</div>
              </div>
            </div>
          </NavLink>
        )
      })}
    </div>
  )
}

export default QuizViewSide