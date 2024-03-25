import React from "react";
import "./TransactionItem.css";
import formatDate from "../../../utilities/FormatDate";
const TransactionItem = (props) => {
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
