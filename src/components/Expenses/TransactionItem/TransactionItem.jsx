import React from "react";
import "./TransactionItem.css";

const TransactionItem = (props) => {
  const formatDate = (inputDate) => {
    let date = new Date(inputDate);
    date =
      date.getDate() +
      "-" +
      date.toLocaleString("default", { month: "long" }) +
      "-" +
      date.getFullYear();
    return date;
  };
  return (
    <tr>
      <td>
        <div className="transaction-name">
          <p className="name">{props.description}</p>
          <p className="date">{formatDate(props.date)}</p>
        </div>
      </td>
      <td className="transaction-category">{props.category}</td>
      <td className="amount">&#8377; {props.amount}</td>
    </tr>
  );
};

export default TransactionItem;
