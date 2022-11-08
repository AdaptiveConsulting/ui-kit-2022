// @ts-nocheck
import * as React from "react"

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
  Legend
);

const getData = (labels, data) => {
  return {
    labels,
    datasets: [
      {
        data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
} 

export interface GraphProps {
  yLabelNumbers? : number;
  labels: string[];
  data: number[];
}

const Graph: React.FC<GraphProps> = ({yLabelNumbers, labels, data}) => {
  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: (value: number, index: number, ticks: unknown[]) => {
            const step = yLabelNumbers ? Math.ceil(ticks.length / (yLabelNumbers- 1)) : 1;
            return (index % step === 0 || index === ticks.length - 1) ? value : null;
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const datasets = getData(labels, data)
  return (
    <Line options={options as ChartJS.ChartOptions} data={datasets} />
  )
}

export default Graph;