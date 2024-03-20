import React from "react";
import "./Budget.css";

const Budget = () => {
  return (
    <div className="budget">
      <div className="heading">
        <p>Budget</p>
      </div>
      <div className="budget-body">
        <div className="total-money">
          <progress id="file" value="300" max="500"></progress>
          <label className="amount">$300K</label>
          <label className="title">Total Money</label>
        </div>
        <div className="income-expense">
         <div className="income">
          <ul>
            <li><p>Income</p>
            69%
            </li>
          </ul>
         </div>
         <div className="expense">
         <ul>
            <li><p>Expense</p>
            31%
            </li>
          </ul>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
