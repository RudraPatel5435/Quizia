import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Header from '../Header'
import Sidebar from '../HomePage/Sidebar'
import { IoAddCircle } from "react-icons/io5";

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

  const allQuizes = [
    {
      title: {
        name: 'Science Trivia',
        isBold: true,
        isItalic: false,
        isUnderline: false
      },
      desc: {
        name: 'Test your basic science knowledge with these fun and engaging questions.',
        isBold: true,
        isItalic: false,
        isUnderline: false
      },
      quizes: [
        {
          Q: 'What is the chemical symbol for water?',
          type: 'radio',
          options: ['H2O', 'O2', 'CO2', 'H2'],
          A: 'H2O'
        },
        {
          Q: 'Explain the process of photosynthesis.',
          type: 'textarea',
          A: 'Photosynthesis is the process by which green plants convert light energy into chemical energy, using carbon dioxide and water to produce glucose and oxygen.'
        }
      ]
    },
    {
      title: {
        name: 'Math Basics',
        isBold: true,
        isItalic: false,
        isUnderline: false
      },
      desc: {
        name: 'Brush up on your math fundamentals with these essential questions.',
        isBold: true,
        isItalic: false,
        isUnderline: false
      },
      quizes: [
        {
          Q: 'What is 5 + 3?',
          type: 'radio',
          options: ['6', '7', '8', '9'],
          A: '8'
        },
        {
          Q: 'Describe the Pythagorean theorem.',
          type: 'textarea',
          A: 'The Pythagorean theorem states that in a right triangle, the square of the hypotenuse length is equal to the sum of the squares of the other two sides.'
        }
      ]
    },
    {
      title: {
        name: 'World Geography',
        isBold: true,
        isItalic: false,
        isUnderline: false
      },
      desc: {
        name: 'Explore the world with these basic geography questions.',
        isBold: true,
        isItalic: false,
        isUnderline: false
      },
      quizes: [
        {
          Q: 'What is the capital of France?',
          type: 'radio',
          options: ['Paris', 'London', 'Berlin', 'Madrid'],
          A: 'Paris'
        },
        {
          Q: 'Describe the layers of the Earth.',
          type: 'textarea',
          A: 'The Earth consists of three main layers: the crust, the mantle, and the core, which is divided into the outer core and inner core.'
        }
      ]
    },
    {
      title: {
        name: 'Tech Knowledge',
        isBold: true,
        isItalic: false,
        isUnderline: false
      },
      desc: {
        name: 'Test your knowledge of technology and its history.',
        isBold: true,
        isItalic: false,
        isUnderline: false
      },
      quizes: [
        {
          Q: 'Who is known as the father of computers?',
          type: 'radio',
          options: ['Charles Babbage', 'Alan Turing', 'Bill Gates', 'Steve Jobs'],
          A: 'Charles Babbage'
        },
        {
          Q: 'Explain the concept of cloud computing.',
          type: 'textarea',
          A: 'Cloud computing involves delivering computing services such as servers, storage, databases, networking, software, over the internet (the cloud) to offer faster innovation, flexible resources, and economies of scale.'
        }
      ]
    },
    {
      title: {
        name: 'Historical Insights',
        isBold: true,
        isItalic: false,
        isUnderline: false
      },
      desc: {
        name: 'Dive into the past with these historical trivia questions.',
        isBold: true,
        isItalic: false,
        isUnderline: false
      },
      quizes: [
        {
          Q: 'Who was the first President of the United States?',
          type: 'radio',
          options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
          A: 'George Washington'
        },
        {
          Q: 'Describe the Industrial Revolution.',
          type: 'textarea',
          A: 'The Industrial Revolution was a period of major industrialization and innovation during the 18th and 19th centuries that led to significant social, economic, and cultural changes worldwide.'
        }
      ]
    }
  ];
  const [quizID, setQuizID] = useState(2)

  const [newQuiz, setNewQuiz] = useState({
    title: {},
    desc: {},
    quizes: [
      {
		id: 1,
        Q:   '',
        type: '',
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
   	       	type: 'radio',
    	    options: ["", ""],
     	    A: ''
        }
      ]
    }))
	setQuizID(quizID+1)
    }


  const onSubmit = async (data) => {
    const {title, desc} = data
    newQuiz.title = {
      name: title,
      isBold: titleIsBold,
      isItalic: titleIsItalic,
      isUnderline: titleIsUnderline
    }
    newQuiz.desc= {
      name: desc,
      isBold: isBold,
      isItalic: isItalic,
      isUnderline: isUnderline
    }

    const r = await fetch("http://localhost:3000", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
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
			onSubmit={handleSubmit(onSubmit)} 
			className='md:w-[70%] lg:w-[55%] p-9 m-auto'
		>

         <div className="focus-within:border-l-8 focus-within:border-l-yellow-500 bg-zinc-800 p-7 text-2xl rounded-lg border-t-[10px] border-t-sky-600">
           <div className="">
             <input 
                type='text'
				onChange={(e)=>{
					newQuiz.title = e.target.value
					setNewQuiz({...newQuiz, title: {...title, name: newQuiz.title}})
				}}
            	// {...register('title', {required: true})} 
				placeholder='Untitled Quiz' 
				className={`bg-transparent text-white outline-none border-b-2 border-b-zinc-700 focus:border-b-zinc-500 focus:border-b-4 ${titleIsBold ? "font-[Gilroy-Semibold]": "font-[Gilroy-Regular]"} ${titleIsUnderline? "underline": ""} ${titleIsItalic ? "italic" : ""}`} 
			/>
             <div className="flex gap-3 text-base mt-2 ml-2">
               <div className={`cursor-pointer text-center h-6 w-6 bg-gray-700 hover:bg-slate-400 rounded-md ${titleIsBold?"bg-slate-400":""}`} onClick={() => {setTitleIsBold(!titleIsBold)}}>B</div>
               <div className={`cursor-pointer text-center h-6 w-6 bg-gray-700 hover:bg-gray-400 rounded-md ${titleIsItalic?"bg-slate-400":""}`} onClick={() => {setTitleIsItalic(!titleIsItalic)}}>I</div>
               <div className={`cursor-pointer text-center h-6 w-6 bg-gray-700 hover:bg-gray-400 rounded-md ${titleIsUnderline?"bg-slate-400":""}`} onClick={() => {setTitleIsUnderline(!titleIsUnderline)}}>U</div>
             </div>
           </div>
           <div className="mt-2">
             <input 
			 	type='text' 
				// {...register('desc', {required: true})} 
				placeholder='Quiz Description' 
				className={`text-lg bg-transparent text-white outline-none border-b-2 border-b-zinc-700 focus:border-b-zinc-500 focus:border-b-4 ${isBold ? "font-[Gilroy-Semibold]": "font-[Gilroy-Regular]"} ${isUnderline? "underline": ""} ${isItalic ? "italic" : ""}`} 
			/>
             <div className="flex gap-3 text-base mt-2 ml-2">
               <div className={`cursor-pointer text-center h-6 w-6 bg-gray-700 hover:bg-slate-400 rounded-md ${isBold?"bg-slate-400":""}`} onClick={() => {setIsBold(!isBold)}}>B</div>
               <div className={`cursor-pointer text-center h-6 w-6 bg-gray-700 hover:bg-gray-400 rounded-md ${isItalic?"bg-slate-400":""}`} onClick={() => {setIsItalic(!isItalic)}}>I</div>
               <div className={`cursor-pointer text-center h-6 w-6 bg-gray-700 hover:bg-gray-400 rounded-md ${isUnderline?"bg-slate-400":""}`} onClick={() => {setIsUnderline(!isUnderline)}}>U</div>
             </div>
           </div>
         </div>



        {newQuiz.quizes.map((quiz, idx)=>{
          return(
         <div key={idx} className="focus-within:border-l-8 focus-within:border-l-yellow-500 bg-zinc-800 p-7 text-2xl rounded-lg mt-5">
           <div className="">
              <input 
                type="text" 
                value={quiz.Q} 
			  	onChange={(e)=>{
					const updatedQuizes = [...newQuiz.quizes]
					updatedQuizes[idx] = {...updatedQuizes[idx], Q: e.target.value}
					setNewQuiz((prevState)=>({
						...prevState,
						quizes: updatedQuizes
					}))
				}}
              placeholder="Untitled Question" 
              className='ml-3 w-5/6 font-[Gilroy-Regular] px-2 py-1 text-lg bg-neutral-700 text-white outline-none border-b-2 border-b-zinc-500 focus:border-b-blue-500 focus:border-b-4' />
              <div className="mt-3">
              {quiz.options.map((option, oidx) => (
                  <div key={oidx}>
                    <input 
						type="radio" 
						name={quiz.id} 
					/> 
					<input 
						type="text"
						placeholder={`Option ${oidx+1}`}
						className='text-sm ml-3 rounded-sm bg-zinc-600 outline-none px-1 py-[2px]'
					/>
                  </div>
                ))}
              </div>
           </div>
         </div>
        )})}

         <div onClick={addQuestion} className="max-w-96 m-auto mt-10 flex items-center justify-around py-2 px-3 cursor-pointer text-3xl text-green-400 bg-zinc-700 rounded-lg">
          <span className='text-2xl text-blue-500'>Add Question</span><IoAddCircle /> 
         </div>

         <div className="mt-10 text-center">
           <button type='submit' className='max-w-3/4 text-4xl px-4 py-2 bg-emerald-600 rounded-md '>Publish Quiz</button>
         </div>


         </form>


      </div>
    </div>
  )
}

export default NewQuiz