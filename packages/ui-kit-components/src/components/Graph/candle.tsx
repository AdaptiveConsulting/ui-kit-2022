import React from 'react';
import { useTheme, Palette, SimplePaletteColorOptions } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface SellBugProps {
  sell: SimplePaletteColorOptions;
  buy: SimplePaletteColorOptions;
}

export const options = {
  responsive: true,
  parsing: {
    xAxisKey: 'id',
    yAxisKey: 'pair',
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
            low: 120,
            pair: [100, 150],
          },
          {
            id: 2,
            open: 150,
            close: 180,
            high: 160,
            low: 120,
            pair: [150, 180],
          },
          {
            id: 3,
            open: 180,
            close: 250,
            high: 160,
            low: 120,
            pair: [180, 250],
          },
          {
            id: 4,
            open: 250,
            close: 177,
            high: 160,
            low: 120,
            pair: [250, 177],
          },
          {
            id: 5,
            open: 177,
            close: 133,
            high: 160,
            low: 120,
            pair: [177, 133],
          },
          {
            id: 6,
            open: 133,
            close: 80,
            high: 160,
            low: 120,
            pair: [133, 80],
          },
          {
            id: 7,
            open: 80,
            close: 280,
            high: 160,
            low: 120,
            pair: [80, 180],
          },
        ],
        // backgroundColor: 'rgba(255, 99, 132, 0.5)',
        backgroundColor: (ctx: any) => {
          console.log(ctx)

          return ctx.raw.close > ctx.raw.open ? palette.success.main : (palette as Palette & SellBugProps).sell.main;
        }
      },
    ],
  }
} ;

const CandleChart: React.FC = () => {
  const { palette } = useTheme();
  return <Bar options={options} data={getdata(palette) as any} />;
};

export default CandleChart;
