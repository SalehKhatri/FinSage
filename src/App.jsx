import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import {Route,Routes, useLocation } from 'react-router-dom'
import Payment from './pages/Payment/Payment'
import Budget from './pages/Budget/Budget'
import Report from './pages/Report/Report'
import Analytics from './pages/Analytics/Analytics' 
import SideBar from './components/Sidebar/SideBar'
import Error from './pages/Error/Error'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
function App() {
  const location = useLocation();
  const shouldShowSidebar = () => {
    const { pathname } = location;
    return !['/login', '/signup'].includes(pathname);
  };
  return (
    // Setting up routes of pages with react-router-dom

      <div className="home"> {/* giving css to the div beceause sidebar takes whole screen and makes main page invisible DON'T MESS ANYTHING HERE IF POSSIBLE!!!*/}
         {shouldShowSidebar() &&  <SideBar /> }
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/payments' element={<Payment/>}/>
        <Route exact path='/report' element={<Report/>}/>
        <Route exact path='/budget' element={<Budget/>}/>
        <Route exact path='/analytics' element={<Analytics/>}/>
        <Route path='*' element={<Error />} />
      </Routes>
      </div>


  )

}

export default App
