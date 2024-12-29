import React, { useState } from 'react'
import Header from '../Header'
import Sidebar from '../HomePage/Sidebar'

const NewQuiz = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="max-h-full min-h-screen w-full relative font-[Gilroy-Semibold] bg-slate-300 text-black dark:bg-zinc-900 dark:text-white">
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className="absolute">
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </div> 
    </div>
  )
}

export default NewQuiz