import React, { useEffect, useState } from "react";
import "./TotalCard.css";
import Balance from "/TotalCard_icons/balance.svg";
import Income from "/TotalCard_icons/Income.svg";
import Expense from "/TotalCard_icons/Expense.svg";
// import TotalSaving from "/TotalCard_icons/TotalSaving.svg";
import ClipLoader from "react-spinners/ClipLoader";
const TotalCard = () => {
  const [loading, setLoading] = useState(true);
  const [userBalance, setUserBalance] = useState([]);

  const fetchBalance = () => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/transaction/balance`, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
        method: "GET",
      },
    })
      .then((data) => data.json())
      .then((response) => {
        setUserBalance(response);
        setLoading(false);
      });
  };

  useEffect(()=>{
    fetchBalance()
  },[])

  return (
    <div style={loading?{display:"flex"}:{display:"grid"}} className="total-card">

   {loading? 
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
   :<>
      <div className="my-balance">
        <img src={Balance} />
        <div className="info">
          <p className="title">My Balance</p>
          <p className="amount">	&#8377;{userBalance.balance}</p>
        </div>
      </div>
      <div className="income">
        <img src={Income} />
        <div className="info">
          <p className="title">Income</p>
          <p className="amount">	&#8377;{userBalance.income}</p>
        </div>
      </div>
      <div className="expense">
        <img src={Expense} />
        <div className="info">
          <p className="title">Expense</p>
          <p className="amount">	&#8377;{userBalance.expense}</p>
        </div>
      </div>
      </>}
    </div>
  );
};

export default TotalCard;
