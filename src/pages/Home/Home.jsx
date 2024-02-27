import React from 'react'
import './Home.css'
import CurrencyConverter from '../../components/CurrencyConverter/CurrencyConverter'
import ExpenseChart from '../../components/ExpenseChart/ExpenseChart'
function Home() {
  return (
        <div className="body">
        <ExpenseChart/>
        <CurrencyConverter />
        </div>
  )
}

export default Home