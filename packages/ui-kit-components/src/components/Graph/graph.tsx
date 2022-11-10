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

const convertLabels = (labels: string[], step: number = 30) => {
  const [beginHour, beginMinute] = labels[0].split(":");
  return labels.map((label, index, arr) => {
    const [hour, minute] = label.split(':');
    const interval = (parseInt(hour) - parseInt(beginHour)) * 60 + (parseInt(minute) - parseInt(beginMinute)); 
    return interval % step === 0 ||
      index === arr.length - 1
      ? label
      : '';
  });
}


const getData = (labels: string[], data: number[]) => {
  return {
    labels: labels,
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

const generateBackgroundColorBoxes = (labelsConverted: string[], step: number = 60) => {
  let boxes = {};
  const labelsDisplayed = labelsConverted.filter((label) => label !== '');
  labelsDisplayed.forEach((label, index) => {
    if (index % 2 === 0) {
      boxes = {
        ...boxes,
        [`box${index}`]: {
          borderWidth: 0,
          drawTime: 'beforeDatasetsDraw',
          type: 'box',
          xMin: index * step,
          xMax: index * step + step,
          backgroundColor: 'rgba(241, 242, 242, 0.75)',
        },
      };
    }
  });
  return boxes;
};

export interface GraphProps {
  yLabelStep?: number;
  xLabelStep?: number;
  labels: string[];
  data: number[];
  previousData?: number;
}

interface GridColorCtx {
  tick: {
    label: string;
  };
}

const Graph: React.FC<GraphProps> = ({
  yLabelStep,
  xLabelStep,
  labels,
  data,
  previousData,
}) => {
  const max = Math.ceil(Math.max(...data));
  const min = Math.floor(Math.min(...data));
  const labelsConverted = convertLabels(labels, xLabelStep);
  const backgroundColorBoxes = generateBackgroundColorBoxes(labelsConverted, xLabelStep);

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
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
          color: (ctx: GridColorCtx) => {
            if (ctx.tick.label === '') {
              return 'rgba(0, 0, 0, 0)';
            } else {
              return 'orange';
            }
          },
        },
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
          mode: 'x' as 'x' | 'y' | 'xy',
        },
      },
      annotation: {
        annotations: {
          ...backgroundColorBoxes,
          line1: {
            type: 'line' as 'box',
            display: true,
            yMin: previousData,
            yMax: previousData,
            borderColor: 'rgb(158, 158, 200)',
            borderDash: [5, 2],
            borderWidth: 1,
          },
        },
      },
    },
  };

  const datasets = getData(labelsConverted, data);
  return <Line options={options as any} data={datasets} />;
};

export default Graph;
