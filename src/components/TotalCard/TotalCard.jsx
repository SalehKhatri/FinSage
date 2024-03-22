import React from 'react'
import './TotalCard.css'
import Balance  from "/TotalCard_icons/balance.svg";
import Income from "/TotalCard_icons/Income.svg";
import Expense  from "/TotalCard_icons/Expense.svg";
import TotalSaving  from "/TotalCard_icons/TotalSaving.svg";

const TotalCard = () => {
  return (
    <div className='total-card'>
      <div className="my-balance">
        <img src={Balance} />
        <div className="info">
          <p className='title'>My Balance</p>
          <p className='amount'>$12,750</p>
        </div>
      </div>
      <div className="income">
        <img src={Income} />
        <div className="info">
          <p className='title'>Income</p>
          <p className='amount'>$5,600</p>
        </div>
      </div>
      <div className="expense">
        <img src={Expense} />
        <div className="info">
          <p className='title'>Expense</p>
          <p className='amount'>$3,640</p>
        </div>
      </div>
      <div className="total-saving">
        <img src={TotalSaving} />
        <div className="info">
          <p className='title'>Total Saving</p>
          <p className='amount'>$7,920</p>
        </div>
      </div>
    </div>
  )
}

export default TotalCard