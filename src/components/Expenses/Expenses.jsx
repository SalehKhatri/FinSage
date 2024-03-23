import React from "react";
import "./Expenses.css";
import Transactions from "./Transactions.jsx";

const Expenses = () => {
  const transactions = [
    {
      name: "Netflix",
      date: "1 Feb, 24 at 14:02",
      category: "Entertainment",
      amount: "-$15.00",
    },
    {
      name: "Netflix",
      date: "1 Feb, 24 at 14:02",
      category: "Entertainment",
      amount: "-$15.00",
    },
  ];
  return <Transactions transactions={transactions} />;
};

export default Expenses;
