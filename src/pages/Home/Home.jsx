import React, { useEffect } from "react";
import "./Home.css";
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";
import ExpenseChart from "../../components/ExpenseChart/ExpenseChart";
import Expenses from "../../components/Expenses/Expenses";
import TotalCard from "../../components/TotalCard/TotalCard";
import Categories from "../../components/Categories/Categories";
import { useDispatch } from "react-redux";
import { fetchUserDetails } from "../../utilities/Redux/userSlice";
// import UpcomingBills from "../../components/UpcomingBills/UpcomingBills";
// import Budget from "../../components/Budget/Budget";
function Home() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchUserDetails())
  },[])
  return (
    <div className="body">
    <div className="home_body">
      <div className="side-1">
        <ExpenseChart />
        <CurrencyConverter />
      </div>
      <div className="side-2">
        <TotalCard />
        <Categories />
        {/* <UpcomingBills /> */}
        {/* <Budget /> */}
      </div>
    </div>
    </div>
  );
}

export default Home;
