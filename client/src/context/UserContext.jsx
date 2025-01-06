import React, { createContext, useEffect, useState } from 'react'

export const AllQuizes = createContext()

const UserContext = ({children}) => {

  const [quizData, setQuizData] = useState([])

  const fetchQuizes = async ()=>{
    const response = await fetch('http://localhost:3000/sendQuizes')
    const jsonData = await response.json()
    setQuizData(jsonData)
  }
  console.log(quizData)
  useEffect(()=>{
    fetchQuizes()
  }, [])


  return (
    <div>
      <AllQuizes.Provider value={quizData}>
        {children}
      </AllQuizes.Provider>
    </div>
  )
}

export default UserContext