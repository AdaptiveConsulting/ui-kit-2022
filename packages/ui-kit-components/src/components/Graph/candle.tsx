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

export const getdata = (palette: Palette) => {
  return {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          {
            id: 1,
            open: 100,
            close: 150,
            high: 160,
            low: 80,
            pair: [100, 150],
          },
          {
            id: 2,
            open: 150,
            close: 180,
            high: 210,
            low: 145,
            pair: [150, 180],
          },
          {
            id: 3,
            open: 180,
            close: 250,
            high: 260,
            low: 120,
            pair: [180, 250],
          },
          {
            id: 4,
            open: 250,
            close: 177,
            high: 260,
            low: 120,
            pair: [250, 177],
          },
          {
            id: 5,
            open: 177,
            close: 133,
            high: 180,
            low: 120,
            pair: [177, 133],
          },
          {
            id: 6,
            open: 133,
            close: 80,
            high: 160,
            low: 70,
            pair: [133, 80],
          },
          {
            id: 7,
            open: 80,
            close: 280,
            high: 77,
            low: 290,
            pair: [80, 180],
          },
        ],
        backgroundColor: (ctx: any) => {
          return ctx.raw.close > ctx.raw.open
            ? palette.success.main
            : (palette as Palette & SellBugProps).sell.main;
        },
      },
    ],
  };
};

const CandleChart: React.FC = () => {
  const { palette } = useTheme();
  return <Bar options={options} data={getdata(palette) as any} plugins={[candlestick]} />;
};

export default CandleChart;
