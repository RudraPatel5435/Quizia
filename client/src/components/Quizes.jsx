import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './HomePage/Sidebar'
import { useParams } from 'react-router'

const Quizes = () => {
  
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

  allQuizes.forEach((i)=>{
    if (i.title.name == title) {
      quiz = i
    }
  })

  const [expanded, setExpanded] = useState(false)
  return (
    <div className="max-h-full min-h-screen w-full font-[Gilroy-Semibold] bg-slate-300 text-black dark:bg-zinc-900 dark:text-white">
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className="absolute">
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </div> 
      <div className='w-[94%] h-1 bg-zinc-400 rounded-full m-auto mb-10'></div>
      <form action="/" className='w-[60%] p-9 m-auto'>

        <div className="bg-zinc-800 p-7 rounded-lg border-t-[10px] border-t-sky-600 mb-10">
          <div className={`text-3xl bg-transparent text-white${quiz.title.isBold ? "font-[Gilroy-Semibold]": "font-[Gilroy-Regular]"} ${quiz.title.isUnderline? "underline": ""} ${quiz.title.isItalic ? "italic" : ""}`}>
            {quiz.title.name}
          </div>    
          <div className={`mt-2 text-md bg-transparent text-white ${quiz.desc.isBold ? "font-[Gilroy-Semibold]": "font-[Gilroy-Regular]"} ${quiz.desc.isUnderline? "underline": ""} ${quiz.desc.isItalic ? "italic" : ""}`}>
            {quiz.desc.name}
          </div>
        </div>

        {quiz.quizes.map((item, idx)=>{
          return(
            <div key={idx} className="bg-zinc-800 p-7 rounded-lg mb-5">
              <div className="">Q.{idx+1} {item.Q}</div>
              <div className="">{item.options}</div>
              <div className="">{item.A}</div>
            </div>
          )
        })}

         <div className="mt-5 text-center">
           <button type='submit' className='text-3xl px-4 py-2 bg-emerald-600 rounded-md'>Submit Answers</button>
        </div>


      </form>
    </div>
  )
}

export default Quizes