import { alpha, Palette } from '@mui/material';
import {
  BarElement,
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

export type PartialNumberType = number | undefined;

export function registerPlugins() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin,
    annotationPlugin,
  );
}

export const convertLabels = (labels: string[], step = 30) => {
  const [beginHour, beginMinute] = labels[0].split(':');
  return labels.map((label, index, arr) => {
    const [hour, minute] = label.split(':');
    const interval =
      (parseInt(hour) - parseInt(beginHour)) * 60 +
      (parseInt(minute) - parseInt(beginMinute));
    return interval % step === 0 || index === arr.length - 1 ? label : '';
  });
};

export const getData = (
  labels: string[],
  data: PartialNumberType[][],
  palette: Palette,
) => {
  const [dataFirstPart, dataSecondPart] = data;
  const labelsToDisplay = labels.map((label) => {
    const [hour, minute] = label.split(':');
    return minute === '00' ? hour : label;
  });

  return dataSecondPart
    ? {
        labels: labelsToDisplay,
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
        labels: labelsToDisplay,
        datasets: [
          {
            lineTension: 0.2,
            data: dataFirstPart,
            borderColor: palette.primary.main,
          },
        ],
      };
};

export const generateBackgroundColorBoxes = (
  labelsConverted: string[],
  step = 60,
  palette: Palette,
) => {
  let boxes = {};
  const labelsDisplayed = labelsConverted.filter((label) => label !== '');
  labelsDisplayed.forEach((label, index) => {
    if (index % 2 === 1) {
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

export const getXAdjustAnnotationLineLabel = (value: number) => {
  if (value >= 1000) {
    return -72;
  } else if (value < 1000 && value >= 100) {
    return -55;
  } else if (value < 100 && value >= 10) {
    return -48;
  } else {
    return -41;
  }
};
