import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error.css'
function Error() {
  return (
    <div className='Error_page'>
      <div className="error_message">
      <h1>404</h1>
      <p>OOPS! PAGE NOT FOUND</p>
      <p>Sorry,the page you are looking for does&apos;t exist</p>
      <div className="home_button">
      <NavLink to='/'>RETURN HOME</NavLink>
      </div>
      </div>
    </div>
  )
}

export default Error