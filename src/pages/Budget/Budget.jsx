import React, { useEffect, useState } from "react";
import "./Budget.css";
import BudgetItem from "../../components/BudgetItem/BudgetItem";
import { useDispatch, useSelector } from "react-redux";
import { budget, fetchUserBudget } from "../../utilities/Redux/budgetSlice";
import { ClipLoader } from "react-spinners";
function Budget() {
  const budgets = useSelector(budget);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserBudget());
  }, []);
  console.log(budgets);
  return (
    <div className="body">
      <div className="budget_container">
        <div className="budget_heading">
          <p>Your Budgets</p>
        </div>
        {budgets.isLoading ? (
          <ClipLoader
            color={"#37689A"}
            loading={budgets.isLoading}
            cssOverride={{
              display: "flex",
              margin: "50px auto",
            }}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <div className="budget_items">
            {!budgets?.user?.length ? <h1>No budgets Yet!</h1> : ""}
            {budgets?.user?.map((budget, key) => {
              return <BudgetItem key={key} {...budget} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Budget;
