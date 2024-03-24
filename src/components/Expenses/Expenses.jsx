import React, { useEffect, useState } from "react";
import "./Expenses.css";
import Add_icon from "/Expenses_icons/Add_icon.svg";
import Search_icon from "/Expenses_icons/Search_icon.svg";
import TransactionItem from "./TransactionItem/TransactionItem.jsx";
import ClipLoader from "react-spinners/ClipLoader";
const Expenses = () => {
  const [expense,setExpense]=useState([])
  const [loading,setLoading] = useState(true);
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

  const fetchAllExpenses=()=>{
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/transaction/getTransaction/expense`,
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
          method: "GET",
        },
      }
    )
      .then((data) => data.json())
      .then((response) => {
        setExpense(response);
        setLoading(false);
      });
  }

useEffect(()=>{
  fetchAllExpenses();
},[])
  return(
    
    <div className="expenses">
      <div className="expense-heading">
        <p>Expense</p>
        <div className="expense-utils">
          <img src={Search_icon} alt="" />
          <img src={Add_icon} alt="" />
        </div>
      </div>
      {loading?
      <ClipLoader
      color={"#37689A"}
      loading={loading}
      cssOverride={{
        display: "flex",
        margin: "50px auto",
      }}
      size={80}
      aria-label="Loading Spinner"
      data-testid="loader"
    />:
        <div className="expense-body">
        <table className="transaction">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expense.map((expenseItem, index) => (
              <TransactionItem key={index} {...expenseItem}  />
            ))}
          </tbody>
        </table>
      </div>}
    </div>
  );
};

export default Expenses;
