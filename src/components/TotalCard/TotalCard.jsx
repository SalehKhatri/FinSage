import React, { useEffect, useState } from "react";
import "./TotalCard.css";
import Balance from "/TotalCard_icons/balance.svg";
import Income from "/TotalCard_icons/Income.svg";
import Expense from "/TotalCard_icons/Expense.svg";
// import TotalSaving from "/TotalCard_icons/TotalSaving.svg";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserTotalBalance,
  userTotalBalance,
} from "../../utilities/Redux/totalBalanceSlice";
const TotalCard = () => {
  const loading = useSelector(userTotalBalance).isLoading;
  const userBalance = useSelector(userTotalBalance).user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserTotalBalance());
  }, []);

  return (
    <div
      style={loading ? { display: "flex" } : { display: "grid" }}
      className="total-card"
    >
      {loading ? (
        <ClipLoader
          color={"#37689A"}
          loading={loading}
          cssOverride={{
            display: "flex",
            margin: "50px auto",
            justifyContent: "center",
          }}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <div className="my-balance">
            <img src={Balance} />
            <div className="info">
              <p className="title">My Balance</p>
              <p className="amount"> &#8377;{userBalance?.balance}</p>
            </div>
          </div>
          <div className="income">
            <img src={Income} />
            <div className="info">
              <p className="title">Income</p>
              <p className="amount"> &#8377;{userBalance?.income}</p>
            </div>
          </div>
          <div className="expense">
            <img src={Expense} />
            <div className="info">
              <p className="title">Expense</p>
              <p className="amount"> &#8377;{userBalance?.expense}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TotalCard;
