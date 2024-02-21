import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./Sidebar.css"
function SideBar() {
  const [open,setOpen]=useState(false)
  const toggle=()=>setOpen(!open);

  // Logic to close sidebar when touch outside of the sidebar
  // <-----------------------------
  let menuRef=useRef();
  useEffect(()=>{
    let handler=(e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current)
      }
    };
    document.addEventListener("mousedown",handler)

    return()=>{
      document.removeEventListener("mousedown",handler);
    }
  })
  // ----------------------------->
  const menuItems=[
    {
      path:"/",
      name:"Overview",
      icon:"public/static/images/Sidebar_icons/graph.svg"
    },
    {
      path:'/payments',
      name:"Payments",
      icon:"public/static/images/Sidebar_icons/payments.svg"
    },
    {
      path:'/budget',
      name:"Budget",
      icon:"public/static/images/Sidebar_icons/wallet-minus.svg"
    },
    {
      path:'/report',
      name:"Report",
      icon:"public/static/images/Sidebar_icons/personalcard.svg"
    },
    {
      path:'/analytics',
      name:"Analytics",
      icon:"public/static/images/Sidebar_icons/chart.svg"
    },
  ]

  const bucketCategory_items=[

    {
      path:'/incomes',
      name:"Incomes",
      icon:"public/static/images/Sidebar_icons/income.svg"
    },
    {
      path:'/debts',
      name:"Debts",
      icon:"public/static/images/Sidebar_icons/group.svg"
    },
    {
      path:'/bills',
      name:"Bills",
      icon:"public/static/images/Sidebar_icons/bill.svg"
    },
    {
      path:'/investments',
      name:"Investments",
      icon:"public/static/images/Sidebar_icons/dollar.svg"
    },
    {
      path:'/assests',
      name:"Assests",
      icon:"public/static/images/Sidebar_icons/coin.svg"
    }
  ]

  return (
    <div className='container'>
      <div style={{width:open?"280px":"50px"}} className="sidebar"  ref={menuRef}>
        <div className="top_section"  >
          <div  className="Top_Logo" style={{scale:!open && "0"}}>
            <img src="public/static/images/FinSage_Logo.png"/>
            </div>
          <div className="bars" onClick={toggle} style={{right:open?"5%":"25%"}} >
            <img src="public/static/images//Sidebar_icons/menu.svg" alt="" />
          </div>
        </div>
        <div  className='main_menu'>
          {/* TODO:Layout shift due to the text while closing the navbar!!! so removed the text */}
          {/* <p>Main Menu</p> */}
        {
          menuItems.map((item,index)=>{
            return(
            <NavLink  style={{padding:!open && "6px 0px 6px 12px"}} to={item.path} key={index} className="link">
              <img src={item.icon}/>
              <div className="link_text"  style={{visibility:!open&&"hidden"}}>{item.name}</div>
            </NavLink>);
          })
        }
        </div>

        <div className="bucket_category">
          {/* <p>Bucket Category</p> */}
          {
            bucketCategory_items.map((item,index)=>{
              return(
              <NavLink style={{padding:!open && "6px 0px 6px 12px"}} to={item.path} key={index} className="link" >
                <img src={item.icon}/>
                <div className="link_text" style={{display:!open&&"none"}}>{item.name}</div>
              </NavLink>);
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default SideBar