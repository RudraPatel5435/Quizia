import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Header from '../Header'
import Sidebar from '../HomePage/Sidebar'

const NewQuiz = () => {
    const{
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    
  const [expanded, setExpanded] = useState(false)
  const [titleIsBold, setTitleIsBold] = useState(false)
  const [titleIsItalic, setTitleIsItalic] = useState(false)
  const [titleIsUnderline, setTitleIsUnderline] = useState(false)
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)

  return (
    <div className="max-h-full min-h-screen w-full relative font-[Gilroy-Semibold] bg-slate-300 text-black dark:bg-zinc-900 dark:text-white">
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className="absolute">
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </div> 
      <div className='w-[94%] h-1 bg-zinc-400 rounded-full m-auto mb-10'></div>

      <form action="" className='w-[60%] p-9 m-auto'>

      <div className="focus-within:border-l-8 focus-within:border-l-yellow-500 bg-zinc-800 p-7 text-2xl rounded-xl border-t-[10px] border-t-sky-600">
        <div className="">
          <input type='text' {...register('title', {required: true})} placeholder='Untitled Quiz' className={`bg-transparent text-white outline-none border-b-2 border-b-zinc-700 focus:border-b-zinc-500 focus:border-b-4 ${titleIsBold ? "font-[Gilroy-Semibold]": "font-[Gilroy-Regular]"} ${titleIsUnderline? "underline": ""} ${titleIsItalic ? "italic" : ""}`} />
          <div className="flex gap-3 text-base mt-2 ml-2">
            <div className={`cursor-pointer text-center h-6 w-6 bg-gray-700 hover:bg-slate-400 rounded-md ${titleIsBold?"bg-slate-400":""}`} onClick={() => {setTitleIsBold(!titleIsBold)}}>B</div>
            <div className={`cursor-pointer text-center h-6 w-6 bg-gray-700 hover:bg-gray-400 rounded-md ${titleIsItalic?"bg-slate-400":""}`} onClick={() => {setTitleIsItalic(!titleIsItalic)}}>I</div>
            <div className={`cursor-pointer text-center h-6 w-6 bg-gray-700 hover:bg-gray-400 rounded-md ${titleIsUnderline?"bg-slate-400":""}`} onClick={() => {setTitleIsUnderline(!titleIsUnderline)}}>U</div>
          </div>
        </div>
        <div className="mt-2">
          <input type='text' {...register('desc', {required: true})} placeholder='Quiz Description' className={`text-lg bg-transparent text-white outline-none border-b-2 border-b-zinc-700 focus:border-b-zinc-500 focus:border-b-4 ${isBold ? "font-[Gilroy-Semibold]": "font-[Gilroy-Regular]"} ${isUnderline? "underline": ""} ${isItalic ? "italic" : ""}`} />
          <div className="flex gap-3 text-base mt-2 ml-2">
            <div className={`cursor-pointer text-center h-6 w-6 bg-gray-700 hover:bg-slate-400 rounded-md ${isBold?"bg-slate-400":""}`} onClick={() => {setIsBold(!isBold)}}>B</div>
            <div className={`cursor-pointer text-center h-6 w-6 bg-gray-700 hover:bg-gray-400 rounded-md ${isItalic?"bg-slate-400":""}`} onClick={() => {setIsItalic(!isItalic)}}>I</div>
            <div className={`cursor-pointer text-center h-6 w-6 bg-gray-700 hover:bg-gray-400 rounded-md ${isUnderline?"bg-slate-400":""}`} onClick={() => {setIsUnderline(!isUnderline)}}>U</div>
          </div>
        </div>
      </div>

      </form>


    </div>
  )
}

export default NewQuiz