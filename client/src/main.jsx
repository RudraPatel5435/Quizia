import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import NewQuiz from './components/NewQuiz/NewQuiz.jsx';
import Quizes from './components/Quizes.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create" element={<NewQuiz />} />
      <Route path='/quiz/:title' element={<Quizes />} />
    </Routes>
  </BrowserRouter>
)
