import React from 'react'

const Quizes = () => {
  return (
    <div className='flex flex-wrap flex-col gap-16 p-20'>
      <div className="text-3xl text-center py-2 rounded-lg  border-4 border-slate-600">Your Quizes</div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <div className="w-[300px] h-[169px] rounded-xl bg-yellow-400 p-2">
          <div className="h-full w-full bg-yellow-100 text-yellow-400 rounded-md flex items-center justify-center text-3xl">Quiz 1</div>
        </div>
      </div> 
    </div>
  )
}

export default Quizes