import React from "react";
import TransactionItem from "../TransactionItem/TransactionItem";
import "./Transactions.css";
import Add_icon from "../../../../public/Expenses_icons/Add_icon.svg";
import Search_icon from "../../../../public/Expenses_icons/Search_icon.svg";

const Transactions = ({ transactions }) => {
  return (
    <div className="expenses">
      <div className="expense-heading">
        <p>Expense</p>
        <div className="expense-utils">
          <img src={Search_icon} alt="" />
          <img src={Add_icon} alt="" />
        </div>
      </div>
      <div className="expense-body">
        <table className="transaction">
          <thead>
            <tr>
              <th>Transaction Name</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <TransactionItem key={index} {...transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
