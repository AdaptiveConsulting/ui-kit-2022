// @ts-nocheck
import * as React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const getData = (labels, data) => {
  return {
    labels,
    datasets: [
      {
        lineTension: 0.2,
        data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
};

export interface GraphProps {
  yLabelStep?: number;
  labels: string[];
  data: number[];
}

const Graph: React.FC<GraphProps> = ({ yLabelStep, labels, data }) => {
  const max = Math.ceil(Math.max(...data)); 
  const min = Math.floor(Math.min(...data));
  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: data.length + 1,
          stepSize: yLabelStep,
          max: max,
          min: min,
          autoSkip: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const datasets = getData(labels, data);
  return <Line options={options as ChartJS.ChartOptions} data={datasets} />;
};

export default Graph;
