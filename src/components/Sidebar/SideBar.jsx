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
      icon:"Sidebar_icons/graph.svg"
    },
    {
      path:'/payments',
      name:"Payments",
      icon:"Sidebar_icons/payments.svg"
    },
    {
      path:'/budget',
      name:"Budget",
      icon:"Sidebar_icons/wallet-minus.svg"
    },
    {
      path:'/analytics',
      name:"Analytics",
      icon:"Sidebar_icons/chart.svg"
    },
  ]

  const bucketCategory_items=[

    {
      path:'/incomes',
      name:"Incomes",
      icon:"Sidebar_icons/income.svg"
    },
    {
      path:'/debts',
      name:"Debts",
      icon:"Sidebar_icons/group.svg"
    },
    {
      path:'/bills',
      name:"Bills",
      icon:"Sidebar_icons/bill.svg"
    },
    {
      path:'/assests',
      name:"Assests",
      icon:"Sidebar_icons/coin.svg"
    }
  ]

  const utilities=[
    {
      path:'/setting',
      name:"Settings",
      icon:"/Sidebar_icons/setting.svg",
      gap:"4px"
    },
    {
      path:'/login',
      name:"Logout",
      icon:"/Sidebar_icons/logout.svg"

    }
  ]

  return (
    <div className='container'>
      <div className="OverLay">
      <div style={{width:open?"220px":"50px"}} className="sidebar"  ref={menuRef}>
        <div className="top_section"  >
          <div  className="Top_Logo" style={{scale:!open && "0"}}>
            <img src="/FinSage_Logo.png"/>
            </div>
          <div className="bars" onClick={toggle} style={{right:open?"5%":"25%"}} >
            <img src="/Sidebar_icons/menu.svg" alt="" />
          </div>
        </div>
        <div className="user_profile">
          <div className="user_picture">
            <img src="Sidebar_icons/profile.svg"/>
          </div>
          <div className="user_name">
            {/* Display users first name only due to layout shift issue  */}
            <p style={{scale:!open&&"0"}}>Saleh</p> 
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
              <div className="link_text"  style={{scale:!open&&"0"}}>{item.name}</div>
            </NavLink>);
          })
        }
        </div>

        <div className="bucket_category" >
          {/* <p>Bucket Category</p> */}
          {
            bucketCategory_items.map((item,index)=>{
              return(
              <NavLink style={{padding:!open && "6px 0px 6px 12px"}} to={item.path} key={index} className="link" >
                <img src={item.icon}/>
                <div className="link_text" style={{scale:!open&&"0"}}>{item.name}</div>
              </NavLink>);
            })
          }
        </div>

        <div className="utilities">
          {
            utilities.map((item,index)=>{
              return(
              <NavLink style={{padding:!open && "6px 0px 6px 12px"}} to={item.path} key={index} className="link" >
                <img src={item.icon}/>
                <div className="link_text" style={{scale:!open&&"0"}}>{item.name}</div>
              </NavLink>);
            })
          }
        </div>
      </div>
      </div>
    </div>
  )
}

export default SideBar