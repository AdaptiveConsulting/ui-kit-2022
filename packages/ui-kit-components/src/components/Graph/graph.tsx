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
import annotationPlugin from 'chartjs-plugin-annotation';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin,
  annotationPlugin,
);

const getData = (labels: string[], data: number[], step: number = 30) => {
  return {
    labels: labels.map((label, index, arr) => {const[hour, minute] = label.split(":"); return (parseInt(minute) + (parseInt(hour) * 60)) % step === 0 || parseInt(minute) % step === 0 || index === arr.length - 1? label: ""}),
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
  xLabelStep?: number;
  labels: string[];
  data: number[];
  previousData?: number;
}

const Graph: React.FC<GraphProps> = ({ yLabelStep, xLabelStep, labels, data, previousData }) => {
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
      x: {
        ticks: {
          maxTicksLimit: labels.length + 1,
          autoSkip: true,
        },
        grid: {
          display: false
        }
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x" as "x" | "y" | "xy",
        },
      },
      annotation: {
        annotations: {
          box1: {
            borderWidth: 0,
            drawTime: 'beforeDatasetsDraw',
            // @ts-ignore
            type: 'box',
            xMin: 0,
            xMax: 60,
            backgroundColor: 'rgba(241, 242, 242, 0.75)',
          },
          box2: {
            borderWidth: 0,
            drawTime: 'beforeDatasetsDraw',
            // @ts-ignore
            type: 'box',
            xMin: 120,
            xMax: 180,
            backgroundColor: 'rgba(241, 242, 242, 0.75)',
          },
          line1: {
            type: 'line' as "box",
            display: true,
            yMin: previousData,
            yMax: previousData,
            borderColor: 'rgb(158, 158, 200)',
            borderDash: [5, 2],
            borderWidth: 1,
          },
        }
      }
    },
  };

  const datasets = getData(labels, data, xLabelStep);
  return <Line options={options} data={datasets} />;
};

export default Graph;
