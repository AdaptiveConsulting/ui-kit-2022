import { Palette, SimplePaletteColorOptions, useTheme } from '@mui/material';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { convertLabels } from './line-utils';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface SellBugProps {
  sell: SimplePaletteColorOptions;
  buy: SimplePaletteColorOptions;
}

const candlestick = {
  id: 'candlestick',
  beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
    const {
      ctx,
      data,
      chartArea: { top, bottom, left, right, width, height },
      scales: { x, y },
    } = chart;

    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeSyle = 'rgba(0, 0, 0, 1)';

    data.datasets[0].data.forEach((dataPoint: any, index: number) => {
      ctx.beginPath();
      ctx.moveTo(
        chart.getDatasetMeta(0).data[index].x,
        chart.getDatasetMeta(0).data[index].y,
      );
      ctx.lineTo(
        chart.getDatasetMeta(0).data[index].x,
        y.getPixelForValue(data.datasets[0].data[index].high),
      );
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(
        chart.getDatasetMeta(0).data[index].x,
        chart.getDatasetMeta(0).data[index].y,
      );
      ctx.lineTo(
        chart.getDatasetMeta(0).data[index].x,
        y.getPixelForValue(data.datasets[0].data[index].low),
      );
      ctx.stroke();
    });
  },
};

export const options = {
  responsive: true,
  parsing: {
    xAxisKey: 'id',
    yAxisKey: 'pair',
  },
  scales: {
    y: {
      beginAtZero: true,
      grace: 50,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const getdata = (
  data: number[],
  labels: string[],
  palette: Palette,
  xAxisStep: number,
) => {
  const dataConverted = data.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / xAxisStep);

    if (!resultArray[chunkIndex]) {
      const arr: number[] = [];
      resultArray[chunkIndex] = arr as never; // start a new chunk
    }

    (resultArray[chunkIndex] as number[]).push(item);

    return resultArray;
  }, []);

  const dataStrutured = dataConverted.map((data, index) => {
    const open = data[0];
    const close = data[(data as number[]).length - 1];
    return {
      id: index,
      open,
      close,
      high: Math.max(...(data as number[])),
      low: Math.min(...(data as number[])),
      pair: [open, close],
    };
  });

  console.log("dataStructured", dataStrutured)

  return {
    labels: convertLabels(labels, xAxisStep).filter((label) => label !== ''),
    datasets: [
      {
        label: 'Dataset 1',
        data: data.reduce((resultArray, item, index) => {
          const chunkIndex = Math.floor(index / xAxisStep);
      
          if (!resultArray[chunkIndex]) {
            const arr: number[] = [];
            resultArray[chunkIndex] = arr as never; // start a new chunk
          }
      
          (resultArray[chunkIndex] as number[]).push(item);
      
          return resultArray;
        }, [])
        .map((data, index) => {
          const open = data[0];
          const close = data[(data as number[]).length - 1];
          return {
            id: index,
            open,
            close,
            high: Math.max(...(data as number[])),
            low: Math.min(...(data as number[])),
            pair: [open, close],
          };
        }),
        backgroundColor: (ctx: any) => {
          return ctx.raw.close > ctx.raw.open
            ? palette.success.main
            : (palette as Palette & SellBugProps).sell.main;
        },
      },
    ],
  };
};

export interface CandleChartProps {
  xAxisStep: number;
  yAxisStep: number;
  dataset: number[];
  labels: string[];
  previousPrice: number;
  currentPrice: number;
  isUp: boolean;
}

const CandleChart: React.FC<CandleChartProps> = ({
  dataset,
  labels,
  xAxisStep = 60,
  yAxisStep = 50,
  previousPrice = 0,
  currentPrice = 0,
  isUp,
}) => {
  const { palette } = useTheme();
  return (
    <Bar
      options={options}
      data={getdata(dataset, labels, palette, xAxisStep) as any}
      plugins={[candlestick]}
    />
  );
};

export default CandleChart;
