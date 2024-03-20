import React from "react";
import "./UpcomingBills.css";
import Arrow from "../../../public/upcoming_bills/arrow_icon.svg";

const UpcomingBills = () => {
  return (
    <div className="upcoming-bills">
      <div className="upcoming-bills-body">
        <div className="header">
          <div className="number-of-bills">
            <p>3</p>
          </div>
          <p>Upcoming Bills</p>
        </div>
        <div className="arrow-icon">
          <img src={Arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UpcomingBills;
