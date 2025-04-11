import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Personalinfo from './Components/Personalinfo'
import Addressinfo from './Components/Addressinfo'
import Displayinfo from './Components/Displayinfo';

function App() {
  return (
    <>
      <div className="multi-step-form">
      <Routes>
      <Route path="/" element={<Personalinfo/>} />
      <Route path="/address" element={<Addressinfo/>} />
      <Route path="/display" element={<Displayinfo/>} />
      </Routes>
     </div>

    </>
  )
}

export default App
