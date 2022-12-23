import { Box } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CandleChart } from '@ui-kit-2022/components';
import * as React from 'react';
export default {
  title: 'Components/Graph/CandleChart',
  component: CandleChart,
} as ComponentMeta<typeof CandleChart>;

import Perlin from '../utils/perlin';
const Template: ComponentStory<typeof CandleChart> = (props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <CandleChart {...props} />
    </Box>
  );
};

export const CandleStory = Template.bind({});
CandleStory.storyName = 'Normal Candle Chart';

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

const defaultGraphData = labels.map(() => {
  y += 0.008;
  return perlin.get(1, y) * 300 + 200;
});
const defaultCurrentData = defaultGraphData[defaultGraphData.length - 1];

CandleStory.args = {
  xAxisStep: 60,
  yAxisStep: 100,
  labels: labels,
  dataset: defaultGraphData,
  previousPrice: Math.random() * 150,
  currentPrice: defaultCurrentData,
  isUp: defaultCurrentData >= defaultGraphData[defaultGraphData.length - 2],
};
