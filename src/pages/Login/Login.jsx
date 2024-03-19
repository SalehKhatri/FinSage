import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
function Login() {
  return (
    
    <div className='login_body'>
      <div className="login_container">
      <div className="logo">
          <img src="/FinSage_Logo.png" />
        </div>
        <div className="login_form">
          <input type="text" name="Username" className="login_input_field" placeholder="Username" />
          <input type="text" name="Password" className="login_input_field" placeholder="Password" />
          <div className="login_utils">
            <p>Forgot password?</p>
            <NavLink to="/signup"><p>Create Account</p></NavLink>
          </div>
          <div className="login_button">
            <NavLink to='/'>Log in</NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login