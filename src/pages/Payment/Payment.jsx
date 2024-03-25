import React from 'react'
import './payment.css'
import Expenses from '../../components/Expenses/Expenses'
import Incomes from '../../components/Incomes/Incomes'
function Payment() {
  return (

      <div className="body">
        <div className="payment_container">
        <Expenses />
        <Incomes />
        </div>

      </div>


  )
}

export default Payment