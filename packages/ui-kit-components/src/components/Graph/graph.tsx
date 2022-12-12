import {
  alpha,
  Box,
  LinearProgress,
  LinearProgressProps,
  Palette,
  useTheme,
} from '@mui/material';
import { ScriptableScaleContext } from 'chart.js';
import * as React from 'react';
import { Line } from 'react-chartjs-2';

import {
  convertLabels,
  generateBackgroundColorBoxes,
  getData,
  PartialNumberType,
  registerPlugins,
} from './graph-utils';

registerPlugins();

interface PaperColorOption {
  black: string;
  white: string;
}

interface PaperOption {
  paper: PaperColorOption;
}

export interface GraphProps {
  yLabelStep?: number;
  xLabelStep?: number;
  labels: string[];
  data: PartialNumberType[][];
  previousData?: number;
  currentData?: number;
  loading?: boolean;
  LinearProgressProps?: LinearProgressProps;
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
  currentData,
  loading,
  LinearProgressProps = {},
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
            if (ctx.tick.label === '') {
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
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color:
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
      annotation: loading
        ? undefined
        : {
            annotations: {
              ...backgroundColorBoxes,
              line1: {
                type: 'line' as 'box',
                display: true,
                yMin: previousData,
                yMax: previousData,
                borderColor:
                  palette.mode === 'light' ? palette.primary.dark : palette.primary.light,
                borderDash: [5, 2],
                borderWidth: 1,
              },
              line2: {
                type: 'line' as 'box',
                display: true,
                yMin: currentData,
                yMax: currentData,
                borderColor:
                  palette.success.main,
                borderDash: [3, 1.5],
                borderWidth: 1,
              },
            },
          },
    },
  };

  const datasets = getData(labelsConverted, loading ? [[]] : data, palette);
  return (
    <Box sx={{ position: 'relative' }}>
      {loading && (
        <LinearProgress
          data-testid="loading"
          {...LinearProgressProps}
          sx={{ width: '50%', position: 'absolute', top: '50%', left: '25%' }}
        />
      )}
      <Line options={options} data={datasets} />
    </Box>
  );
};

export default Graph;
