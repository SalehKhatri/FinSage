/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./ExpenseChart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  userWeeklyExpense,
  fetchUserWeeklyExpense,
} from "../../utilities/Redux/weeklyExpenseSlice";
function ExpenseChart() {
  const labels = [];
  const daywiseExpense = [];
  // const [weeklyExpense, setWeeklyExpense] = useState([]);
  const dispatch = useDispatch();
  const weeklyExpense = useSelector(userWeeklyExpense);
  weeklyExpense?.user?.expensesPerDay?.map((data) => {
    labels.push(data.day);
    daywiseExpense.push(data.totalExpense);
  });
  useEffect(() => {
    dispatch(fetchUserWeeklyExpense());
  }, []);
  return (
    <div className="chart_container">
      <div className="chart_heading">
        <p>Expense</p>
      </div>
      <div className="chart_weeklyExpense">
        <p>
          Weekly Expense{" "}
          <span className="expense_amount">
            {weeklyExpense?.user?.totalExpense}
          </span>
        </p>
      </div>
      <div className="chart_main">
        <Line
          id="canvas"
          datasetIdKey="id"
          data={{
            labels: labels,
            datasets: [
              {
                id: 1,
                data: daywiseExpense,
                borderColor: "#2D6195",
                pointHoverRadius: 5,
                borderWidth: 1,
                fill: true,
                backgroundColor: "rgba(190,225,240,0.5)",
                tension: 0.4,
                hoverBackgroundColor: "#979797",
                pointRadius: 3,
              },
            ],
          }}
          // Code to hide label
          options={{
            responsive: true,
            interaction: {
              mode: "nearest",
              axis: "x",
              intersect: false,
            },
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },

              y: {
                border: {
                  display: false,
                },
                grid: {
                  display: true,
                },
                ticks: {
                  display: false,
                  maxTicksLimit: 6,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default ExpenseChart;
