/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./ExpenseChart.css";
function ExpenseChart() {
  const [labels,setLabels]=useState([]);
  const [daywiseExpense,setDaywiseExpense]=useState([])
  const [loading, setLoading] = useState(true);
  const [weeklyExpense, setWeeklyExpense] = useState([]);
  const getWeeklyExpense = () => {
    console.log("Api call");
    fetch(`${import.meta.env.VITE_API_BASE_URL}/transaction/weeklyExpense`, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
        method: "GET",
      },
    })
      .then((data) => data.json())
      .then((response) => {
        setWeeklyExpense(response);
        console.log(response);
        response.expensesPerDay.map((respone)=>{
          labels.push(respone.day);
          daywiseExpense.push(respone.totalExpense);
        })
        setLoading(false);
      });
  };
  function formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = mm+'/'+dd;
    return date
 }

function Last7Days () {
    var result = [];
    for (var i=0; i<7; i++) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        result.push( formatDate(d) )
    }

    return(result);
 }

  useEffect(() => {
    getWeeklyExpense();
  }, []);
  return (
    <div className="chart_container">
      <div className="chart_heading">
        <p>Expense</p>
      </div>
      <div className="chart_weeklyExpense">
        <p>
          Weekly Expense{" "}
          <span className="expense_amount">{weeklyExpense.totalExpense}</span>
        </p>
      </div>
      <div className="chart_main">
        <Line
          id="canvas"
          datasetIdKey="id"
          data={{
            // labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
            labels:labels,
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
