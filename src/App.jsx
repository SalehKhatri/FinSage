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
        <Route path='/finsage/' element={<Home/>} />
        <Route path='/finsage/payments' element={<Payment/>}/>
        <Route path='/finsage/budget' element={<Budget/>}/>
        <Route path='/finsage/report' element={<Report/>}/>
        <Route path='/finsage/analytics' element={<Analytics/>}/>
      </Routes>
      </BrowserRouter>

  )

}

export default App
