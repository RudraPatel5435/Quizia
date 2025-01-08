import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import Header from '../Header'
import Sidebar from '../HomePage/Sidebar'
import { IoAddCircle } from "react-icons/io5";
import { AllQuizes } from '../../context/UserContext';

const NewQuiz = () => {
  const allQuizes = useContext(AllQuizes)
  const{handleSubmit} = useForm();
  const [expanded, setExpanded] = useState(false)
  const [quizID, setQuizID] = useState(2)
  const [newQuiz, setNewQuiz] = useState({
    title: { 
      name: 'Untitled Quiz',
      isBold: false,
      isItalic: false,
      isUnderline: false
     },
    desc: { 
      name: 'Quiz Description',
      isBold: false,
      isItalic: false,
      isUnderline: false 
    },
    quizes: [
      {
        id: 1,
        Q: '',
        options: ["", ""],
        A: ''
      }
    ]
  })

  const addQuestion = () => {
    setNewQuiz((prevState) => ({
      ...prevState,
      quizes: [
        ...prevState.quizes,
        {
          id: quizID,
          Q: '',
          options: ["", ""],
          A: ''
        }
      ]
    }))
    setQuizID(quizID + 1)
  }


  const onSubmit = async () => {
    await fetch("http://localhost:3000/publish", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newQuiz)
    })  
  }


  return (
    <div className="max-h-full min-h-screen w-full relative font-[Gilroy-Semibold] bg-slate-300 text-black dark:bg-zinc-900 dark:text-white">
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className="absolute z-100">
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </div>
      <div className='w-[94%] h-1 bg-zinc-400 rounded-full m-auto mb-10'></div>
      <div className="">

        <form
          action="/create"
          method='post'
          onSubmit={handleSubmit(onSubmit)}
          className='md:w-[70%] lg:w-[55%] p-9 m-auto'
        >

          <div className="focus-within:border-l-8 focus-within:border-l-yellow-500 bg-gray-500 dark:bg-zinc-800 p-7 text-2xl rounded-lg border-t-[10px] border-t-sky-500 dark:border-t-sky-600">
            <div className="">
              <input
                type='text'
                placeholder='Untitled Quiz'
                className={`bg-transparent text-white outline-none border-b-2 border-b-blue-100 dark:border-b-zinc-700 focus:border-b-blue-200 dark:focus:border-b-zinc-500 focus:border-b-4 ${newQuiz.title.isBold ? "font-[Gilroy-Semibold]" : "font-[Gilroy-Regular]"} ${newQuiz.title.isUnderline ? "underline" : ""} ${newQuiz.title.isItalic ? "italic" : ""}`}
                value={newQuiz.title.name}
                onChange={(e) => { setNewQuiz({ ...newQuiz, title: {...newQuiz.title, name: e.target.value } }) }}
              />
              <div className="flex gap-3 text-base mt-2 ml-2">
                <div className={`cursor-pointer text-center h-6 w-6 bg-blue-200 dark:bg-gray-700 hover:bg-slate-400 rounded-md ${newQuiz.title.isBold ? "bg-slate-400" : ""}`} onClick={() => {setNewQuiz({...newQuiz, title: {...newQuiz.title, isBold: !newQuiz.title.isBold}})}}>B</div>
                <div className={`cursor-pointer text-center h-6 w-6 bg-blue-200 dark:bg-gray-700 hover:bg-gray-400 rounded-md ${newQuiz.title.isItalic ? "bg-slate-400" : ""}`} onClick={() => {setNewQuiz({...newQuiz, title: {...newQuiz.title, isItalic: !newQuiz.title.isItalic}})}}>I</div>
                <div className={`cursor-pointer text-center h-6 w-6 bg-blue-200 dark:bg-gray-700 hover:bg-gray-400 rounded-md ${newQuiz.title.isUnderline ? "bg-slate-400" : ""}`} onClick={() => {setNewQuiz({...newQuiz, title: {...newQuiz.title, isUnderline: !newQuiz.title.isUnderline}})}}>U</div>
              </div>
            </div>
            <div className="mt-2">
              <input
                type='text'
                placeholder='Quiz Description'
                className={`text-lg bg-transparent text-white outline-none border-b-2 border-b-blue-100 dark:border-b-zinc-700 focus:border-b-blue-200 dark:focus:border-b-zinc-500 focus:border-b-4 ${newQuiz.desc.isBold ? "font-[Gilroy-Semibold]" : "font-[Gilroy-Regular]"} ${newQuiz.desc.isUnderline ? "underline" : ""} ${newQuiz.desc.isItalic ? "italic" : ""}`}
                value={newQuiz.desc.name}
                onChange={(e) => { setNewQuiz({ ...newQuiz, desc: {...newQuiz.desc,  name: e.target.value } }) }}
              />
              <div className="flex gap-3 text-base mt-2 ml-2">
                <div className={`cursor-pointer text-center h-6 w-6 bg-blue-200 dark:bg-gray-700 hover:bg-slate-400 rounded-md ${newQuiz.desc.isBold ? "bg-slate-400" : ""}`} onClick={() => {setNewQuiz({...newQuiz, desc: {...newQuiz.desc, isBold: !newQuiz.desc.isBold}})}}>B</div>
                <div className={`cursor-pointer text-center h-6 w-6 bg-blue-200 dark:bg-gray-700 hover:bg-gray-400 rounded-md ${newQuiz.desc.isItalic ? "bg-slate-400" : ""}`} onClick={() => {setNewQuiz({...newQuiz, desc: {...newQuiz.desc, isItalic: !newQuiz.desc.isItalic}})}}>I</div>
                <div className={`cursor-pointer text-center h-6 w-6 bg-blue-200 dark:bg-gray-700 hover:bg-gray-400 rounded-md ${newQuiz.desc.isUnderline ? "bg-slate-400" : ""}`} onClick={() => {setNewQuiz({...newQuiz, desc: {...newQuiz.desc, isUnderline: !newQuiz.desc.isUnderline}})}}>U</div>
              </div>
            </div>
          </div>



          {newQuiz.quizes.map((quiz, idx) => {
            return (
              <div key={idx} className="focus-within:border-l-8 focus-within:border-l-yellow-500 bg-gray-500 dark:bg-zinc-800 p-7 text-2xl rounded-lg mt-5">
                <div className="">
                  <input
                    type="text"
                    value={quiz.Q}
                    onChange={(e) => {
                      const updatedQuizes = [...newQuiz.quizes]
                      updatedQuizes[idx] = { ...updatedQuizes[idx], Q: e.target.value }
                      setNewQuiz((prevState) => ({
                        ...prevState,
                        quizes: updatedQuizes
                      }))
                    }}
                    placeholder="Untitled Question"
                    className='ml-3 w-5/6 font-[Gilroy-Regular] px-2 py-1 text-lg bg-blue-200 dark:bg-neutral-700 font-semibold text-black dark:text-white outline-none border-b-2 border-b-zinc-500 focus:border-b-blue-500 focus:border-b-4' />
                  <div className="mt-3">
                    {quiz.options.map((option, oidx) => (
                      <div key={oidx}>
                        <input
                          type="radio"
                          name={quiz.id}
                        />
                        <input
                          type="text"
                          placeholder={`Option ${oidx + 1}`}
                          className='text-sm ml-3 rounded-sm bg-blue-200 dark:bg-zinc-600 outline-none px-1 py-[2px]'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}

          <div onClick={addQuestion} className="max-w-96 m-auto mt-10 flex items-center justify-around py-2 px-3 cursor-pointer text-3xl text-green-400 bg-gray-600 dark:bg-zinc-700 rounded-lg">
            <span className='text-2xl text-blue-300 dark:text-blue-500'>Add Question</span><IoAddCircle />
          </div>

          <div className="mt-10 text-center">
            <button type='submit' className='max-w-3/4 text-4xl text- px-4 py-2 text-neutral-300 bg-emerald-600 rounded-md '>Publish Quiz</button>
          </div>


        </form>


      </div>
    </div>
  )
}

export default NewQuiz