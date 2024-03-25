/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./TransactionModal.css";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserBudget } from "../../utilities/Redux/budgetSlice";
import { fetchUserWeeklyExpense } from "../../utilities/Redux/weeklyExpenseSlice";
import { fetchUserTotalBalance } from "../../utilities/Redux/totalBalanceSlice";
import { fetchCategoryWiseExpense } from "../../utilities/Redux/categoryWiseExpense";
import RefreshData from "../../utilities/RefreshData";

// eslint-disable-next-line react/prop-types
function TransactionModal({ closeModal }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const showBudgetModal = () => {
    const { pathname } = location;
    return ["/budget"].includes(pathname);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onSubmit", reValidateMode: "onSubmit" });
  const [transactionType, setTransactionType] = useState("income");
  const incomeCategories = ["Salary", "Personal", "Savings", "Others"];
  const expenseCatgories = [
    "Home necessities ",
    "Food and drinks",
    "Investments",
    "Entertainment",
    "Transportation ",
    "Rent ",
    "Utilities ",
    "Emergency ",
    "Loans",
    "Vacation",
    "Other",
  ];

  const handleBudgetForm = (data) => {
    const toastId = toast.loading("Saving...");
    fetch(`${import.meta.env.VITE_API_BASE_URL}/budget/createBudget`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status >= 200) {
          toast.success("Transaction added!", {
            id: toastId,
          });
          RefreshData(dispatch)
          closeModal();
        } else {
          toast.error("An error occured!", {
            id: toastId,
          });
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error("An error occured", {
          id: toastId,
        });
      });
  };

  const handleTransactionForm = (data) => {
    const toastId = toast.loading("Saving...");
    fetch(`${import.meta.env.VITE_API_BASE_URL}/transaction/addTransaction`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Transaction added!", {
            id: toastId,
          });
          closeModal();
          RefreshData(dispatch)
        } else {
          toast.error("An error occured!", {
            id: toastId,
          });
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error("An error occured", {
          id: toastId,
        });
      });
  };

  return (
    <>
      <div className="modal_wrapper" onClick={closeModal}></div>
      {showBudgetModal() ? (
        // ------------->Budget modal<------------------------------
        <div className="TransactionModal_container">
          <div className="modal_heading">
            <p>Create budget</p>
          </div>
          <form
            method="post"
            className="Modal_Fields"
            onSubmit={handleSubmit(handleBudgetForm)}
          >
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              {...register("amount", {
                required: {
                  value: true,
                  message: "Amount is required",
                },
                valueAsNumber: true,
              })}
            />
            {errors.amount?.message && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "6px",
                  margin: "4px 0px",
                }}
              >
                <img
                  style={{ height: "18px", color: "red" }}
                  src="/error_icons/caution.svg"
                  alt=""
                />
                <p
                  role="alert"
                  style={{ color: "red", fontSize: "16px" }}
                  className="login_error_message"
                >
                  {errors.amount?.message}
                </p>
              </div>
            )}
            <div
              className="Modal_dropdowns"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <label htmlFor="type">Category</label>
              <select
                style={{ width: "90%" }}
                {...register("category", {
                  required: {
                    value: true,
                    message: "Category is required",
                  },
                })}
              >
                {expenseCatgories.map((category, index) => {
                  return <option key={index}>{category}</option>;
                })}
              </select>

              {errors.category?.message && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    margin: "4px 0px",
                  }}
                >
                  <img
                    style={{ height: "18px", color: "red" }}
                    src="/error_icons/caution.svg"
                    alt=""
                  />
                  <p
                    role="alert"
                    style={{ color: "red", fontSize: "16px" }}
                    className="login_error_message"
                  >
                    {errors.category?.message}
                  </p>
                </div>
              )}
            </div>
            <div className="modal_buttons">
              <button onClick={closeModal}>Cancel</button>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      ) : (
        //----------->Transaction modal <--------------------------------
        <div className="TransactionModal_container">
          <div className="modal_heading">
            <p>Add transaction</p>
          </div>
          <form
            method="post"
            className="Modal_Fields"
            onSubmit={handleSubmit(handleTransactionForm)}
          >
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              {...register("description", {
                required: {
                  value: true,
                  message: "Name is required",
                },
                maxLength: {
                  value: 15,
                  message: "Maximum length is 15",
                },
              })}
            />
            {errors.description?.message && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "6px",
                  margin: "4px 0px",
                }}
              >
                <img
                  style={{ height: "18px", color: "red" }}
                  src="/error_icons/caution.svg"
                  alt=""
                />
                <p
                  role="alert"
                  style={{ color: "red", fontSize: "16px" }}
                  className="login_error_message"
                >
                  {errors.description?.message}
                </p>
              </div>
            )}
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              {...register("amount", {
                required: {
                  value: true,
                  message: "Amount is required",
                },
                valueAsNumber: true,
              })}
            />
            {errors.amount?.message && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "6px",
                  margin: "4px 0px",
                }}
              >
                <img
                  style={{ height: "18px", color: "red" }}
                  src="/error_icons/caution.svg"
                  alt=""
                />
                <p
                  role="alert"
                  style={{ color: "red", fontSize: "16px" }}
                  className="login_error_message"
                >
                  {errors.amount?.message}
                </p>
              </div>
            )}
            <div className="Modal_dropdowns">
              <label htmlFor="type">Type</label>
              <select
                onChange={(e) => {
                  setTransactionType(e.target.value);
                  console.log(e.target.value);
                }}
                {...register("type", {
                  required: {
                    value: true,
                    message: "Type is required",
                  },
                  onChange: (e) => {
                    setTransactionType(e.target.value);
                  },
                })}
              >
                <option>income</option>
                <option>expense</option>
              </select>
              {errors.type?.message && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    margin: "4px 0px",
                  }}
                >
                  <img
                    style={{ height: "18px", color: "red" }}
                    src="/error_icons/caution.svg"
                    alt=""
                  />
                  <p
                    role="alert"
                    style={{ color: "red", fontSize: "16px" }}
                    className="login_error_message"
                  >
                    {errors.type?.message}
                  </p>
                </div>
              )}
              <label htmlFor="type">Category</label>
              {transactionType === "income" ? (
                <select
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Category is required",
                    },
                  })}
                >
                  {incomeCategories.map((category, index) => {
                    return <option key={index}>{category}</option>;
                  })}
                </select>
              ) : (
                <select
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Category is required",
                    },
                  })}
                >
                  {expenseCatgories.map((category, index) => {
                    return <option key={index}>{category}</option>;
                  })}
                </select>
              )}
              {errors.category?.message && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    margin: "4px 0px",
                  }}
                >
                  <img
                    style={{ height: "18px", color: "red" }}
                    src="/error_icons/caution.svg"
                    alt=""
                  />
                  <p
                    role="alert"
                    style={{ color: "red", fontSize: "16px" }}
                    className="login_error_message"
                  >
                    {errors.category?.message}
                  </p>
                </div>
              )}
            </div>
            <label htmlFor="date">Date </label>
            <input
              onChange={(e) => console.log(e.target.value)}
              id="datePicker"
              placeholder="Select a date"
              type="date"
              {...register("date", {
                required: { value: true, message: "Date is required" },
              })}
            />
            {errors.date?.message && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "6px",
                  margin: "4px 0px",
                }}
              >
                <img
                  style={{ height: "18px", color: "red" }}
                  src="/error_icons/caution.svg"
                  alt=""
                />
                <p
                  role="alert"
                  style={{ color: "red", fontSize: "16px" }}
                  className="login_error_message"
                >
                  {errors.date?.message}
                </p>
              </div>
            )}
            <div className="modal_buttons">
              <button onClick={closeModal}>Cancel</button>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default TransactionModal;
