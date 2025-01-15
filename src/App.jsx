import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ForgotPassword from './ForgotPassword'
import { Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deleniti fuga porro, aliquid et veritatis nulla autem recusandae explicabo ad, unde, dignissimos magni doloremque iure ipsum cupiditate sit harum. Suscipit?
    </div>
     <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/' element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App
