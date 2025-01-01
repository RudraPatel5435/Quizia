import React, { useState } from 'react'
import Sidebar from './components/HomePage/Sidebar';
import Header from './components/Header';
import CreateQuiz from './components/HomePage/CreateQuiz';
import Quizes from './components/HomePage/Quizes';

const App = () => {
  const [expanded, setExpanded] = useState(false)
  return(
    <div className="max-h-full min-h-screen w-full relative font-[Gilroy-Semibold] bg-slate-300 text-black dark:bg-zinc-900 dark:text-white">
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className="absolute">
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </div>
      <div className='w-[94%] h-1 bg-zinc-400 rounded-full m-auto'></div>
      <div className="flex items-start justify-center">
        <CreateQuiz />
      </div>
      <div className="">
        <Quizes />
      </div>
    </div>
  )
}

export default App