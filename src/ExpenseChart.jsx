import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = () => {
  const data = {
    labels: [
      "Foodstuff",
      "Store Rent",
      "Light Bills",
      "Transport",
      "Miscellaneous"
    ],
    datasets: [
      {
        data: [24, 48, 12, 10, 6],
        backgroundColor: [
          "#2e7d5b",
          "#c89b6d",
          "#f39c12",
          "#3b82c4",
          "#e74c3c"
        ]
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          generateLabels: (chart) => {
            const data = chart.data;
            return data.labels.map((label, i) => ({
              text: `${label} ${data.datasets[0].data[i]}%`,
              fillStyle: data.datasets[0].backgroundColor[i],
              index: i
            }));
          }
        }
      }
    }
  };

  return (
    <div style={{ width: "400px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;