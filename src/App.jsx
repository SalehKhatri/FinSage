import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Payment from './pages/Payment/Payment'
import Budget from './pages/Budget/Budget'
import Report from './pages/Report/Report'
import Analytics from './pages/Analytics/Analytics' 
function App() {
  // TODO: i have changed the base property in vite.config.js due to path issue chechk that
  return (

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/payments' element={<Payment/>}/>
        <Route path='/budget' element={<Budget/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/analytics' element={<Analytics/>}/>
      </Routes>
      </BrowserRouter>

  )

}

export default App
