import { Box } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Graph } from '@ui-kit-2022/components';
import * as React from 'react';
export default {
  title: 'Components/Graph/Graph',
  component: Graph,
} as ComponentMeta<typeof Graph>;

import Perlin from '../utils/perlin';
const Template: ComponentStory<typeof Graph> = (props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Graph {...props} />
    </Box>
  );
};

export const LineStory = Template.bind({});
LineStory.storyName = 'Line Chart';

const perlin = new Perlin();
let y = 0.008;

const lineLabels = Array(24 * 60)
  .fill(0)
  .map((_, i) => {
    return (~~(i / 60) + ':0' + Math.round(60 * ((i / 60) % 1))).replace(
      /\d(\d\d)/g,
      '$1',
    );
  })
  .filter((time) => {
    const [hour, minute] = time.split(':');
    return (
      ['9', '10', '11', '12', '13', '14', '15'].includes(hour) ||
      (hour === '16' && minute === '00')
    );
  });

const lineData = lineLabels.map(() => {
  y += 0.008;
  return perlin.get(1, y) * 300 + 200;
});
const lineCurrentData = lineData[lineData.length - 1];

LineStory.args = {
  xAxisStep: 60,
  yAxisStep: 100,
  labels: lineLabels,
  dataset: lineData,
  previousPrice: Math.random() * 150,
  currentPrice: lineCurrentData,
  isUp: lineCurrentData >= lineData[lineData.length - 2],
  chartName: "line",
};

export const BarStory = Template.bind({});
BarStory.storyName = 'Bar Chart';

y = 0.008;

const barLabels = Array(24 * 60)
  .fill(0)
  .map((_, i) => {
    return (~~(i / 60) + ':0' + Math.round(60 * ((i / 60) % 1))).replace(
      /\d(\d\d)/g,
      '$1',
    );
  })
  .filter((time) => {
    const [hour, minute] = time.split(':');
    return (
      ['9', '10', '11', '12', '13', '14', '15'].includes(hour) ||
      (hour === '16' && minute === '00')
    );
  });

const barData = barLabels.map(() => {
  y += 0.008;
  return perlin.get(1, y) * 300 + 200;
});
const barCurrentData = barData[barData.length - 1];

BarStory.args = {
  xAxisStep: 60,
  yAxisStep: 100,
  labels: barLabels,
  dataset: barData,
  previousPrice: Math.random() * 150,
  currentPrice: barCurrentData,
  isUp: barCurrentData >= barData[barData.length - 2],
  chartName: "bar",
};

export const CandleStory = Template.bind({});
CandleStory.storyName = 'Candle Chart';

y = 0.008;

const CandleLabels = Array(24 * 60)
  .fill(0)
  .map((_, i) => {
    return (~~(i / 60) + ':0' + Math.round(60 * ((i / 60) % 1))).replace(
      /\d(\d\d)/g,
      '$1',
    );
  })
  .filter((time) => {
    const [hour, minute] = time.split(':');
    return (
      ['9', '10', '11', '12', '13', '14', '15'].includes(hour) ||
      (hour === '16' && minute === '00')
    );
  });

const candleData = CandleLabels.map(() => {
  y += 0.008;
  return perlin.get(1, y) * 300 + 200;
});
const candleCurrentData = candleData[candleData.length - 1];

CandleStory.args = {
  xAxisStep: 60,
  yAxisStep: 100,
  labels: CandleLabels,
  dataset: candleData,
  previousPrice: Math.random() * 150,
  currentPrice: candleCurrentData,
  isUp: candleCurrentData >= candleData[candleData.length - 2],
  chartName: "candle",
};