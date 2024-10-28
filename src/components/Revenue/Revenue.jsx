import React from 'react';
import PendingTask from './PendingTask';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
  );
const Revenue = () => {

    const data = {
        labels: ["00hr", "02hr", "04hr", "06hr", "08hr", "10hr", "12hr", "14hr", "16hr", "18hr", "20hr", "22hr", "24hr"],
        datasets: [
          {
            label: "Revenue",
            data: [0, 100, 200, 300, 400, 500, 600, 400, 300, 450, 500, 480, 600],
            borderColor: "#A1045A]",
            backgroundColor: "rgba(163, 0, 85, 0.1)", 
            fill: true,
            tension: 0.4, // Smooth curve
            pointRadius: (context) => context.dataIndex === data.labels.length - 1 ? 5 : 0, // Show bullet point only for last data point
            pointBackgroundColor: (context) => context.dataIndex === data.labels.length - 1 ? "#A1045A" : "transparent", // Color only for last data point
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.raw} AED`,
            },
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
            },
          },
          y: {
            display: true,
            beginAtZero: true,
            ticks: {
              callback: (value) => `AED ${value}`,
            },
          },
        },
      };
    
    return (
        <div  className='grid grid-cols-1 gap-6 md:grid-cols-2 my-6 mx-4 lg:mx-0  '>
            <div>
            <h2 className="text-xl font-semibold mb-2">
        Revenue <span className="font-bold">600 AED</span>
      </h2>
      <Line data={data} options={options} />
            </div>
            <PendingTask/>
        </div>
    );
};

export default Revenue;