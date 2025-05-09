import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Pie } from 'react-chartjs-2';
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Vote Count',
        data: [300, 50, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
  maintainAspectRatio: false,
  width: 300,
  height: 300,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };
const PieChart = () => {
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  )
}

export default PieChart
