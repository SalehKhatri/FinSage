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
    // const getBudgets = () => {
    //   fetch(`${import.meta.env.VITE_API_BASE_URL}/budget/getBudget`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "auth-token": localStorage.getItem("auth-token"),
    //       method: "GET",
    //     },
    //   })
    //     .then((data) => data.json())
    //     .then((response) => {
    //       setBudgets(response);
    //       setLoading(false);
    //     });
    // };
    // getBudgets();
    dispatch(fetchUserBudget());
  }, []);
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
            {/* <BudgetItem /> */}
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
