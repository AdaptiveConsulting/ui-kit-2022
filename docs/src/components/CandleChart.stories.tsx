import { Box } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CandleChart } from '@ui-kit-2022/components';
import * as React from 'react';
export default {
  title: 'Components/Graph/CandleChart',
  component: CandleChart,
} as ComponentMeta<typeof CandleChart>;

// import Perlin from '../utils/perlin';
const Template: ComponentStory<typeof CandleChart> = (props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <CandleChart {...props} />
    </Box>
  );
};

export const BarStory = Template.bind({});
BarStory.storyName = 'Normal Candle Chart';