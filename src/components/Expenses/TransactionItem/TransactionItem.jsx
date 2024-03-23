import React from "react";
import "./TransactionItem.css";

const TransactionItem = ({ name, date, category, amount }) => {
  return (
    <tr>
      <td>
        <div className="transaction-name">
          <p className="name">{name}</p>
          <p className="date">{date}</p>
        </div>
      </td>
      <td className="transaction-category">{category}</td>
      <td className="amount">{amount}</td>
    </tr>
  );
};

export default TransactionItem;
