import React from 'react'
import './Home.css'
import CurrencyConverter from '../../components/CurrencyConverter/CurrencyConverter'
function Home() {
  return (
        <div className="body">
        {/* <p>Overview</p> */}
        <CurrencyConverter />
        </div>
  )
}

export default Home