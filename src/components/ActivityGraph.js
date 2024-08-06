import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top", // Place legend on top of the chart
    },
    title: {
      display: true,
      text: "Monthly Activity", // Chart title
    },
  },
};

const labels = ["Week 1", "Week 2", "Week 3", "Week 4"]; // Example labels for weeks

// Sample data
const data = {
  labels,
  datasets: [
    {
      label: "Activity",
      data: [2000, 3000, 1500, 5000], // Example data
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const ActivityGraph = () => {
  return <Bar options={options} data={data} />;
};

export default ActivityGraph;
