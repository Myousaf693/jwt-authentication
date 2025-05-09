import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend } from 'chart.js'
import { lineChartData } from './LineChartData'


ChartJS.register( CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Sales',
    },
  },
};
const LineChart = () => {
  
  
  return (
    <Line options={options} data={lineChartData}/>
  )
}

export default LineChart
