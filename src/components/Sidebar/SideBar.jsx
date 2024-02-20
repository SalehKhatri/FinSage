import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css"
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
function SideBar() {
  const menuItems=[
    {
      path:"/",
      name:"Overview",
      icon:<AssessmentOutlinedIcon/>
    },
    {
      path:'/payments',
      name:"Payments",
      icon:<PaymentsOutlinedIcon/>
    },
    {
      path:'/budget',
      name:"Budget",
      icon:<AccountBalanceWalletOutlinedIcon />
    },
    {
      path:'/report',
      name:"Report",
      icon:<FindInPageOutlinedIcon />
    },
    {
      path:'/analytics',
      name:"Analytics",
      icon:<AddchartOutlinedIcon />
    },
  ]
  return (
    <div className='container'>
      <div className="sidebar">
        <div className="top_section">
          {/* uploaded logo on drive due to path error will fix it later */}
        <img src="https://i.ibb.co/XFZ0Cgk/Fin-Sage-Logo.png" alt="Fin-Sage-Logo" />

          <div className="bars"><MenuIcon /></div>
        </div>
        <div className='main_menu'>
          <p>Main Menu</p>
        {
          menuItems.map((item,index)=>{
            return(
            <NavLink to={item.path} key={index} className="link">
              {item.icon?item.icon:""}
              <div className="link_text">{item.name}</div>
            </NavLink>);
          })
        }
        </div>
      </div>
    </div>
  )
}

export default SideBar