import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './HomePage/Sidebar'
import { useParams } from 'react-router'
import { AllQuizes } from '../context/UserContext'

const Quizes = () => {

  const allQuizes = useContext(AllQuizes) 
  const [expanded, setExpanded] = useState(false)
  const { title } = useParams()
  let quiz = null

  try{if (allQuizes && allQuizes.length > 0) {
    quiz = allQuizes.find((q) => q.title.name === title)
  }}catch {
    console.log('NO DATA')
  }

  return (
    <div className="max-h-full min-h-screen w-full font-[Gilroy-Semibold] bg-slate-300 dark:bg-zinc-900">
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className="absolute">
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </div>
      <div className='w-[94%] h-1 bg-zinc-400 rounded-full m-auto mb-10'></div>
      {!allQuizes || allQuizes.length === 0 ?
        <div className='text-4xl text-center text-white mt-24'>
          Loading...
        </div>

        :

        (<form action="/" className='lg:w-[55%] mg:w-[70%] sm:w-[90%] p-9 m-auto'>

          <div className="bg-gray-500 dark:bg-zinc-800 p-7 rounded-lg border-t-[10px] border-t-sky-500 dark:border-t-sky-600 mb-10">
            <div className={`md:text-3xl text-2xl bg-transparent text-blue-300 dark:text-blue-400 ${quiz.title.isBold ? "font-[Gilroy-Semibold]" : "font-[Gilroy-Regular]"} ${quiz.title.isUnderline ? "underline" : ""} ${quiz.title.isItalic ? "italic" : ""}`}>
              {quiz.title.name}
            </div>
            <div className={`mt-2 md:text-md text-base bg-transparent text-yellow-300 ${quiz.desc.isBold ? "font-[Gilroy-Semibold]" : "font-[Gilroy-Regular]"} ${quiz.desc.isUnderline ? "underline" : ""} ${quiz.desc.isItalic ? "italic" : ""}`}>
              {quiz.desc.name}
            </div>
          </div>

          {quiz.quizes.map((item, idx) => {
            return (
              <div key={idx} className="bg-gray-500 dark:bg-zinc-800 p-7 rounded-lg mb-5 font-[Gilroy-Regular] font-semibold">
                <div className="md:text-2xl text-xl text-violet-300 dark:text-violet-400">Q.{idx + 1} {item.Q}</div>
                {item.options.map((option, i) => (
                  <div key={i} className="mt-2">
                    <input type="radio" className='mr-2' name={item.id} /><span className='text-base md:text-lg text-neutral-200'>{option}</span>
                  </div>
                ))}
              </div>
            )
          })}

          <div className="mt-5 text-center">
            <button type='submit' className='text-3xl px-4 py-2  border-4 dark:border-emerald-400 dark:bg-emerald-600 border-emerald-600 bg-emerald-400 text-neutral-800 dark:text-white mt-3 w-full rounded-md'>Submit Answers</button>
          </div>


        </form>)}
    </div>
  )
}

export default Quizes