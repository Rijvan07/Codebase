import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ForgotPassword from './ForgotPassword'
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/forgotpasswordy' element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App