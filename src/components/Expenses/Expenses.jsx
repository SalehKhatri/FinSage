import React, { useEffect, useState } from "react";
import "./Expenses.css";
import TransactionItem from "../TransactionItem/TransactionItem.jsx";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { allExpenses, fetchAllExpenses } from "../../utilities/Redux/allExpense.js";
import CallMadeIcon from '@mui/icons-material/CallMade';
const Expenses = () => {
  const expense = useSelector(allExpenses)?.allExpenses;
  const loading= useSelector(allExpenses)?.isLoading;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllExpenses());
  }, []);
  return (
    <div className="expenses">
      <div className="expense-heading">
        <p>Expense</p>
        <CallMadeIcon />
      </div>
      {loading ? (
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
        />
      ) : (
        !expense?.length ? <h4 style={{textAlign:"center"}}>Nothing to display Yet!</h4>:
        <div className="expense-body">
          <table className="transaction">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {expense?.map((expenseItem, index) => (
                <TransactionItem key={index} {...expenseItem} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Expenses;
