/* eslint-disable no-unused-vars */
import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./ExpenseChart.css";
function ExpenseChart() {
  
  return (
    <div className="chart_container">
      <div className="chart_heading">
        <p>Expense</p>
      </div>
      <div className="chart_weeklyExpense">
        <p>
          Weekly Expense <span className="expense_amount">$5000</span>
        </p>
      </div>
      <div className="chart_main">
        <Line
        id="canvas"
          datasetIdKey="id"
          data={{
            labels: ["MON", "TUE", "WED","THU","FRI","SAT","SUN"],
            datasets: [
              {
                id: 1,
                data: [260,270,265,280,250,240,270],
                borderColor: '#2D6195',
                pointHoverRadius:5,
                borderWidth:1,
                fill: true,
                fillColor:"#e5e5e5",
                tension:0.4,
                hoverBackgroundColor:"#979797",
                pointRadius:3, 
              },
              
            ],
            
          }}
          // Code to hide label
          options={{
            responsive:true,
            interaction: {
              mode: 'nearest',
              axis: 'x',
              intersect: false
            },
            maintainAspectRatio:false,
            plugins:{
             legend: {
              display: false
             },
            },
            scales: {
              x: {
                grid: {
                  display: false
                }
              },
              
              y: {
                border:{
                  display:false
                },
                grid: {
                  display: true
                },
                ticks:{
                  display:false,
                  maxTicksLimit: 6,
                }
              }
            },            
           }}
           
        />
      </div>
    </div>
  );
}

export default ExpenseChart;
