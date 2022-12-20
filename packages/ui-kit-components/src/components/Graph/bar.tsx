import React from 'react';
import { Palette, useTheme, alpha } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  convertLabels,
  registerPlugins,
} from './line-utils';
import { ScriptableScaleContext } from 'chart.js';
registerPlugins();
interface PaperColorOption {
  black: string;
  white: string;
}

interface PaperOption {
  paper: PaperColorOption;
}

export const getOptions = (
  dataset: number[],
  labels: string[],
  palette: Palette,
  yAxisStep: number,
  xAxisStep: number,
) => {
  const max = Math.ceil(
    Math.max(...(dataset.filter((num) => num !== undefined) as number[])),
  );
  const min = Math.floor(
    Math.min(...(dataset.filter((num) => num !== undefined) as number[])),
  );

  let boxes = {};
  console.log("labels", labels);
  const convertedLabels = convertLabels(labels, xAxisStep);
  console.log("convertLabels", convertedLabels);
  convertLabels(labels, xAxisStep)
  .filter((label, index) => label !== '' || index % 2 !== 0)
  .map(label => {console.log("label", label); return label})
    .forEach((label, index) => {
      boxes = {
        ...boxes,
        [`box${index}`]: {
          borderWidth: 0,
          drawTime: 'beforeDraw',
          type: 'box',
          xMin: index - 0.5,
          xMax: index + 0.5,
          backgroundColor:
            palette.mode === 'light'
              ? alpha(palette.grey[100], 0.6)
              : alpha(palette.grey[900], 0.6),
        },
      };
    });

  return {
    responsive: true,
    scales: {
      y: {
        ticks: {
          maxTicksLimit: dataset.length + 1,
          stepSize: yAxisStep,
          max: max,
          min: min,
          autoSkip: true,
        },
        grid: {
          color: (ctx: ScriptableScaleContext) => {
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
          drawOnChartArea: true,
          tickColor: (ctx: ScriptableScaleContext) => {
            if (ctx.tick?.label === '') {
              return 'rgba(0, 0, 0, 0)';
            } else {
              return palette.mode === 'light'
                ? alpha((palette as Palette & PaperOption).paper.black, 0.2)
                : alpha((palette as Palette & PaperOption).paper.white, 0.2);
            }
          },
          color: (ctx: ScriptableScaleContext) => {
            if (ctx.index === 0) {
              return palette.mode === 'light'
                ? alpha((palette as Palette & PaperOption).paper.black, 0.2)
                : alpha((palette as Palette & PaperOption).paper.white, 0.2);
            } else {
              return 'rgba(0, 0, 0, 0)';
            }
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      annotation: {
        annotations: {
          ...boxes,
        },
      },
    },
  };
};

export const getData = (
  data: number[],
  labels: string[],
  palette: Palette,
  xAxisStep: number,
) => {
  return {
    labels: convertLabels(labels, xAxisStep).filter((label) => label !== ''),
    datasets: [
      {
        data: data
          .reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / xAxisStep);

            if (!resultArray[chunkIndex]) {
              const arr: number[] = [];
              resultArray[chunkIndex] = arr as never; // start a new chunk
            }

            (resultArray[chunkIndex] as number[]).push(item);

            return resultArray;
          }, [])
          .map(
            (arr) =>
              (arr as number[]).reduce((a, b) => a + b, 0) / (arr as number[]).length,
          ),
        backgroundColor: palette.primary.main,
      },
    ],
  };
};

export interface BarChartProps {
  xAxisStep: number;
  yAxisStep: number;
  dataset: number[];
  labels: string[];
}

const BarChart: React.FC<BarChartProps> = ({
  dataset,
  labels,
  xAxisStep = 60,
  yAxisStep = 50,
}) => {
  const { palette } = useTheme();
  return (
    <Bar
      options={getOptions(dataset, labels, palette, yAxisStep, xAxisStep) as any}
      data={getData(dataset, labels, palette, xAxisStep)}
    />
  );
};

export default BarChart;
