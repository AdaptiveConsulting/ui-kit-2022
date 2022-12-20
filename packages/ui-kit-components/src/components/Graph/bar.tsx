import React from 'react';
import { Palette, useTheme, alpha , SimplePaletteColorOptions} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { convertLabels, registerPlugins, getXAdjustAnnotationLineLabel } from './line-utils';
import { ScriptableScaleContext } from 'chart.js';
registerPlugins();
interface PaperColorOption {
  black: string;
  white: string;
}

interface PaperOption {
  paper: PaperColorOption;
}

interface SellBugProps {
  sell: SimplePaletteColorOptions;
  buy: SimplePaletteColorOptions;
}

export const getOptions = (
  dataset: number[],
  labels: string[],
  palette: Palette,
  yAxisStep: number,
  xAxisStep: number,
  previousPrice: number,
  currentPrice: number,
  isUp: boolean
) => {
  const max = Math.ceil(
    Math.max(...(dataset.filter((num) => num !== undefined) as number[])),
  );
  const min = Math.floor(
    Math.min(...(dataset.filter((num) => num !== undefined) as number[])),
  );

  let boxes = {};

  convertLabels(labels, xAxisStep)
    .filter((label) => label !== '')
    .forEach((label, index) => {
      if (index % 2 !== 0) {
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
      }

    });

  return {
    responsive: true,
    layout: {
      padding: {
        left: 20,
      },
    },
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
          line1: {
            type: 'line' as 'box',
            display: true,
            yMin: previousPrice,
            yMax: previousPrice,
            borderColor:
              palette.mode === 'light' ? palette.primary.dark : palette.primary.light,
            borderDash: [5, 2],
            borderWidth: 1,
            label: {
              enabled: true,
              backgroundColor: palette.grey[700],
              borderWidth: 0,
              borderRadius: {
                topLeft: 5,
                bottomLeft: 5,
                topRight: 0,
                bottomRight: 0,
              },
              drawTime: 'afterDatasetsDraw',
              position: 'start',
              xAdjust: getXAdjustAnnotationLineLabel(previousPrice || 0),
              color: palette.common.white,
              content: () => [previousPrice?.toFixed(2)],
              textAlign: 'left',
            },
          },
          line2: {
            type: 'line' as 'box',
            display: true,
            yMin: currentPrice,
            yMax: currentPrice,
            borderColor: isUp
              ? palette.success.main
              : (palette as Palette & SellBugProps).sell.main,
            borderDash: [3, 1.5],
            borderWidth: 1,
            label: {
              enabled: true,
              backgroundColor: isUp
                ? palette.success.main
                : (palette as Palette & SellBugProps).sell.main,
              borderWidth: 0,
              borderRadius: {
                topLeft: 5,
                bottomLeft: 5,
                topRight: 0,
                bottomRight: 0,
              },
              drawTime: 'afterDatasetsDraw',
              position: 'start',
              xAdjust: getXAdjustAnnotationLineLabel(currentPrice || 0),
              color: palette.common.black,
              content: () => ['CP', currentPrice?.toFixed(2)],
              textAlign: 'left',
            },
          },
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
  previousPrice: number;
  currentPrice: number;
  isUp: boolean;
}

const BarChart: React.FC<BarChartProps> = ({
  dataset,
  labels,
  xAxisStep = 60,
  yAxisStep = 50,
  previousPrice = 0,
  currentPrice = 0,
  isUp
}) => {
  const { palette } = useTheme();
  return (
    <Bar
      options={getOptions(dataset, labels, palette, yAxisStep, xAxisStep, previousPrice, currentPrice, isUp) as any}
      data={getData(dataset, labels, palette, xAxisStep)}
    />
  );
};

export default BarChart;
