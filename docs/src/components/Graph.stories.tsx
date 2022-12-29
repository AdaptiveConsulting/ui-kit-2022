import { Box } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Graph } from '@ui-kit-2022/components';
import * as React from 'react';
export default {
  title: 'Components/Graph/Graph',
  component: Graph,
  argTypes: {
    chartName: {
      options: ['line', 'bar', 'candle'],
      defaultValue: 'line',
      control: { type: 'radio' },
    }
  }
} as ComponentMeta<typeof Graph>;

import Perlin from '../utils/perlin';
const Template: ComponentStory<typeof Graph> = (props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Graph {...props} />
    </Box>
  );
};

export const ChartStory = Template.bind({});
ChartStory.storyName = 'Selected Chart';

const perlin = new Perlin();
let y = 0.008;

const labels = Array(24 * 60)
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

const data = labels.map(() => {
  y += 0.008;
  return perlin.get(1, y) * 300 + 200;
});
const lineCurrentData = data[data.length - 1];

ChartStory.args = {
  chartName: "line",
  xAxisStep: 60,
  yAxisStep: 100,
  labels: labels,
  dataset: data,
  previousPrice: Math.random() * 150,
  currentPrice: lineCurrentData,
  isUp: lineCurrentData >= data[data.length - 2],
};
