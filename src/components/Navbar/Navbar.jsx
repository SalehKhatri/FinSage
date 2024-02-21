import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div className="right_section">
        <img src="Navbar_icons/Moon_light.svg" />
        <img src="Navbar_icons/Frame.svg"/>
        <img src="Navbar_icons/Vector.svg"/>
        <div className="user_info">
          <p className='user_name'>Saleh S. Khatri</p>
          <p className='user_membership'>Premium Member</p>
        </div>
        <div className="DownArrow">
        <img src="Navbar_icons/ArrowDown.svg"/>
        </div>

      </div>
    </div>
  )
}

export default Navbar