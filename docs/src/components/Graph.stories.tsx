import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Graph } from '@ui-kit-2022/components';
import * as React from 'react';
export default {
  title: 'Components/Graph',
  component: Graph,
  argTypes: {
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Graph>;

import Perlin from '../utils/perlin';
const Template: ComponentStory<typeof Graph> = (props) => {
  return <Graph {...props} />;
};

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

export const GraphStory = Template.bind({});
GraphStory.storyName = 'Graph';
const defaultGraphData = labels.map(() => {
  y += 0.008;
  return perlin.get(1, y) * 300 + 200;
});
const defaultCurrentData = defaultGraphData[defaultGraphData.length - 1];
GraphStory.args = {
  yLabelStep: 50,
  xLabelStep: 60,
  labels,
  data: [defaultGraphData],
  previousData: Math.random() * 150,
  currentData: defaultCurrentData,
};

export const GraphCloseEarlyStory = Template.bind({});
const closeEarlyData = labels.map((_, index) => {
  y += 0.008;
  return index < 300 ? perlin.get(1, y) * 300 + 200 : undefined;
});
const closeEarlyCurrentData = closeEarlyData[299];
GraphCloseEarlyStory.storyName = 'Graph Close Early';
GraphCloseEarlyStory.args = {
  yLabelStep: 50,
  xLabelStep: 60,
  labels,
  data: [closeEarlyData],
  previousData: Math.random() * 150,
  currentData: closeEarlyCurrentData,
};

export const GraphTwoPartsStory = Template.bind({});
GraphTwoPartsStory.storyName = 'Graph Two Parts';
const dataWholeLine = labels.map(() => {
  y += 0.008;
  return perlin.get(1, y) * 300 + 200;
});
const twoPartsCurrentData = dataWholeLine[299];
GraphTwoPartsStory.args = {
  yLabelStep: 50,
  xLabelStep: 60,
  labels,
  data: [
    dataWholeLine.map((element, index) => (index < 300 ? element : undefined)),
    dataWholeLine.map((element, index) => (index >= 300 ? element : undefined)),
  ],
  previousData: Math.random() * 150,
  currentData: twoPartsCurrentData,
};
