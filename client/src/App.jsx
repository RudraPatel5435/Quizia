import React, { useContext, useState } from 'react'
import Sidebar from './components/HomePage/Sidebar';
import Header from './components/Header';
import CreateQuiz from './components/HomePage/CreateQuiz';
import { NavLink } from 'react-router';
import { AllQuizes } from './context/UserContext';

const App = () => {

  const allQuizes = useContext(AllQuizes)
  const [expanded, setExpanded] = useState(false)
  
  return(
    <div className="max-h-full min-h-screen w-screen relative font-[Gilroy-Semibold] bg-slate-300 dark:bg-zinc-900 dark:text-white">
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className="absolute">
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </div>
      <div className='w-[94%] h-1 bg-zinc-400 rounded-full m-auto'></div>
      <div className="flex items-start justify-center">
        <CreateQuiz />
      </div>
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
    </div>
  )
}

export default App