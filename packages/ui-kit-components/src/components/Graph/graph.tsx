import { alpha, Palette, useTheme } from '@mui/material';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import zoomPlugin from 'chartjs-plugin-zoom';
import * as React from 'react';
import { Line } from 'react-chartjs-2';

// import { alpha } from '../../utils';

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

interface PaperColorOption {
  black: string;
  white: string;
}

interface PaperOption {
  paper: PaperColorOption;
}

const convertLabels = (labels: string[], step = 30) => {
  const [beginHour, beginMinute] = labels[0].split(':');
  return labels.map((label, index, arr) => {
    const [hour, minute] = label.split(':');
    const interval =
      (parseInt(hour) - parseInt(beginHour)) * 60 +
      (parseInt(minute) - parseInt(beginMinute));
    return interval % step === 0 || index === arr.length - 1 ? label : '';
  });
};

const getData = (labels: string[], data: PartialNumberType[][], palette: Palette) => {
  const [dataFirstPart, dataSecondPart] = data;

  return dataSecondPart
    ? {
        labels: labels,
        datasets: [
          {
            lineTension: 0.2,
            data: dataFirstPart,
            borderColor: palette.primary.main,
          },
          {
            lineTension: 0.2,
            data: dataSecondPart,
            borderDash: [10, 5],
            borderColor: palette.primary.main,
          },
        ],
      }
    : {
        labels: labels,
        datasets: [
          {
            lineTension: 0.2,
            data: dataFirstPart,
            borderColor: palette.primary.main,
          },
        ],
      };
};

const generateBackgroundColorBoxes = (
  labelsConverted: string[],
  step = 60,
  palette: Palette,
) => {
  let boxes = {};
  const labelsDisplayed = labelsConverted.filter((label) => label !== '');
  labelsDisplayed.forEach((label, index) => {
    if (index % 2 === 0) {
      boxes = {
        ...boxes,
        [`box${index}`]: {
          borderWidth: 0,
          drawTime: 'beforeDraw',
          type: 'box',
          xMin: index * step,
          xMax: index * step + step,
          backgroundColor:
            palette.mode === 'light'
              ? alpha(palette.grey[100], 0.6)
              : alpha(palette.grey[900], 0.6),
        },
      };
    }
  });
  return boxes;
};

type PartialNumberType = number | undefined;

export interface GraphProps {
  yLabelStep?: number;
  xLabelStep?: number;
  labels: string[];
  data: PartialNumberType[][];
  previousData?: number;
}

interface GridColorCtx {
  tick: {
    label: string;
  };
}

/**
 *
 * @param yLabelStep represents the step size between the values of labels in y-axis.
 * @param xLabelStep represents the step size between the values of labels in x-axis.
 * @param labels an array contains the labels displayed in x-axis
 * @param data an array contains one or two series of data displayed for the line on the chart
 * @param previousData a value displayed by the horizantol line on the chart
 * @returns
 */
const Graph: React.FC<GraphProps> = ({
  yLabelStep,
  xLabelStep,
  labels,
  data,
  previousData,
}) => {
  const { palette } = useTheme();
  const max = Math.ceil(
    Math.max(...(data[0].filter((num) => num !== undefined) as number[])),
  );
  const min = Math.floor(
    Math.min(...(data[0].filter((num) => num !== undefined) as number[])),
  );

  const labelsConverted = convertLabels(labels, xLabelStep);
  const backgroundColorBoxes = generateBackgroundColorBoxes(
    labelsConverted,
    xLabelStep,
    palette,
  );

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          maxTicksLimit: data[0].length + 1,
          stepSize: yLabelStep,
          max: max,
          min: min,
          autoSkip: true,
        },
        grid: {
          color: (ctx: GridColorCtx) => {
            if (ctx.tick.label === '') {
              return 'rgba(0, 0, 0, 0)';
            } else {
              return palette.mode === 'light'
                ? alpha((palette as Palette & PaperOption).paper.black, 0.2)
                : alpha((palette as Palette & PaperOption).paper.white, 0.2);
            }
          },
        },
      },
      x: {
        ticks: {
          maxTicksLimit: labels.length + 1,
          autoSkip: true,
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          color: (ctx: GridColorCtx) => {
            if (ctx.tick.label === '') {
              return 'rgba(0, 0, 0, 0)';
            } else {
              return palette.mode === 'light'
                ? alpha((palette as Palette & PaperOption).paper.black, 0.2)
                : alpha((palette as Palette & PaperOption).paper.white, 0.2);
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
        labels: {
          fontColor:
            palette.mode === 'light'
              ? alpha(palette.common.black, 0.55)
              : alpha(palette.common.white, 0.55),
        },
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
            borderColor: palette.primary.dark,
            borderDash: [5, 2],
            borderWidth: 1,
          },
        },
      },
    },
  };

  const datasets = getData(labelsConverted, data, palette);
  return <Line options={options as any} data={datasets as any} />;
};

export default Graph;
