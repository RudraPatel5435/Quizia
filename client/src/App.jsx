import React, { useState } from 'react'
import Sidebar from './components/HomePage/Sidebar';
import Header from './components/Header';
import CreateQuiz from './components/HomePage/CreateQuiz';
import { NavLink } from 'react-router';

const App = () => {

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

  const [expanded, setExpanded] = useState(false)
  return(
    <div className="max-h-full min-h-screen w-screen relative font-[Gilroy-Semibold] bg-slate-300 text-black dark:bg-zinc-900 dark:text-white">
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className="absolute">
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </div>
      <div className='w-[94%] h-1 bg-zinc-400 rounded-full m-auto'></div>
      <div className="flex items-start justify-center">
        <CreateQuiz />
      </div>
      <div className='flex flex-wrap flex-col gap-16 p-20'>
        <div className="text-3xl text-center py-2 rounded-lg  border-4 border-slate-600">Your Quizes</div>
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