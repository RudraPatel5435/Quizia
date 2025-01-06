import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './HomePage/Sidebar'
import { useParams } from 'react-router'
import { AllQuizes } from '../context/UserContext'

const Quizes = () => {

  const quizData = useContext(allQuizes)
  // console.log(quizData)

  const [expanded, setExpanded] = useState(false)
  const {title} = useParams()

  let quiz = null

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
          options: ['H2O', 'O2', 'CO2', 'H2'],
          A: 'H2O',
          id: 1
        },
        {
          Q: 'Explain the process of photosynthesis.',
          options: ['It occurs in chloroplasts.', 'It uses light to produce glucose.', 'Green plants do it.', 'Photosynthesis is a process by which plants use sunlight to synthesize foods.'],
          A: 'Photosynthesis is a process by which plants use sunlight to synthesize foods.',
          id: 2
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
          options: ['6', '7', '8', '9'],
          A: '8',
          id: 3
        },
        {
          Q: 'Describe the Pythagorean theorem.',
          options: ['It relates sides of a triangle.', 'Hypotenuse equals side squares.', 'Math concept.', 'The square of the hypotenuse equals the sum of the squares of the other two sides.'],
          A: 'The square of the hypotenuse equals the sum of the squares of the other two sides.',
          id: 4
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
          options: ['Paris', 'London', 'Berlin', 'Madrid'],
          A: 'Paris',
          id: 5
        },
        {
          Q: 'Describe the layers of the Earth.',
          options: ['Crust, mantle, core.', 'Crust and core.', 'Earth structure.', 'The Earth consists of three main layers: crust, mantle, core.'],
          A: 'The Earth consists of three main layers: crust, mantle, core.',
          id: 6
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
          options: ['Charles Babbage', 'Alan Turing', 'Bill Gates', 'Steve Jobs'],
          A: 'Charles Babbage',
          id: 7
        },
        {
          Q: 'Explain the concept of cloud computing.',
          options: ['Internet services.', 'Storage in the cloud.', 'Resources delivered via the internet.', 'Cloud computing involves delivering computing services over the internet.'],
          A: 'Cloud computing involves delivering computing services over the internet.',
          id: 8
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
          options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
          A: 'George Washington',
          id: 9
        },
        {
          Q: 'Describe the Industrial Revolution.',
          options: ['18th-century change.', 'Mass production era.', 'Industrialization.', 'The Industrial Revolution was a period of major innovation and change.'],
          A: 'The Industrial Revolution was a period of major innovation and change.',
          id: 10
        }
      ]
    }
  ];
  
  if (allQuizes && allQuizes.length > 0) {
    quiz = allQuizes.find((q)=>q.title.name === title)
  }

  return (
    <div className="max-h-full min-h-screen w-full font-[Gilroy-Semibold] bg-slate-300 dark:bg-zinc-900">
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className="absolute">
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </div> 
      <div className='w-[94%] h-1 bg-zinc-400 rounded-full m-auto mb-10'></div>
      {!allQuizes || allQuizes.length ===0 ? 
      <div>
        Loading
      </div>

      :

      (<form action="/" className='lg:w-[55%] mg:w-[70%] sm:w-[90%] p-9 m-auto'>

        <div className="bg-gray-500 dark:bg-zinc-800 p-7 rounded-lg border-t-[10px] border-t-sky-500 dark:border-t-sky-600 mb-10">
          <div className={`md:text-3xl text-2xl bg-transparent text-blue-300 dark:text-blue-400 ${quiz.title.isBold ? "font-[Gilroy-Semibold]": "font-[Gilroy-Regular]"} ${quiz.title.isUnderline? "underline": ""} ${quiz.title.isItalic ? "italic" : ""}`}>
            {quiz.title.name}
          </div>    
          <div className={`mt-2 md:text-md text-base bg-transparent text-yellow-300 ${quiz.desc.isBold ? "font-[Gilroy-Semibold]": "font-[Gilroy-Regular]"} ${quiz.desc.isUnderline? "underline": ""} ${quiz.desc.isItalic ? "italic" : ""}`}>
            {quiz.desc.name}
          </div>
        </div>

        {quiz.quizes.map((item, idx)=>{
          return(
            <div key={idx} className="bg-gray-500 dark:bg-zinc-800 p-7 rounded-lg mb-5 font-[Gilroy-Regular] font-semibold">
              <div className="md:text-2xl text-xl text-violet-300 dark:text-violet-400">Q.{idx+1} {item.Q}</div>
              {item.options.map((option, i)=>(
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