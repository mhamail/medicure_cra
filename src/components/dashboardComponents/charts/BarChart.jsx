import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CategoryScale, LinearScale, BarController, BarElement, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarController, BarElement, Title);


const BarChart = () => {
    const data = {
        labels: ['Esther', 'Bessle', 'Kristin', 'Ralph', 'Leslie', 'Jeroma', 'Courtney'],
        datasets: [
            {
                label: 'Sales',
                data: [80, 20, 40, 60, 80, 40, 30],
                backgroundColor: '#3F435B',
                borderWidth: 1,
                barBorderRadius: 100,
                borderSkipped: false,
                barPercentage: 0.5,
                fill: false,
            },
            {
                label: 'Sales',
                data: [40, 20, 50, 30, 70, 40, 60],
                backgroundColor: '#8AB8A0 ',
                borderWidth: 1,
                borderWidth: 1,
                barBorderRadius: 100,
                borderSkipped: false,
                barPercentage: 0.5,
            },
            {
                label: 'Sales',
                data: [20, 30, 80, 40, 20, 50, 20],
                backgroundColor: '#F2CD91',
                borderWidth: 1,
                borderWidth: 1,
                barBorderRadius: 100,
                borderSkipped: false,
                barPercentage: 0.5,
            },

        ],
    };
    const options = {
        maintainAspectRatio: false,
        layout:{
            padding:20
        },
        plugins: {
            legend: {
                display: false, // Hide dataset label
            },
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.051)', // Change x-axis grid line color
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.051)', // Change x-axis grid line color
                },
                ticks: {
                    stepSize: 25, // Set the desired step size between ticks
                    callback: (value) => `${value}`, // Format the tick value as desired
                },
            },
        },
    };
  return (
    <Bar data={data} options={options}/>
  )
}

export default BarChart