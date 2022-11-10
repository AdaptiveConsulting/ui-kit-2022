import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Graph } from '@ui-kit-2022/components';
import * as React from 'react';
import { useTheme } from '@emotion/react';
export default {
  title: 'Components/Graph',
  component: Graph,
} as ComponentMeta<typeof Graph>;

import Perlin from '../utils/perlin';
const Template: ComponentStory<typeof Graph> = (props) => {
  return <Graph {...props} />;
};

const perlin = new Perlin();
let y = 0.008;

const labels = (Array(24 * 60).fill(0).map((_, i) => { return ('0' + ~~(i / 60) + ': 0' + Math.round(60  * (i / 60 % 1))).replace(/\d(\d\d)/g, '$1') })).filter(time => {
  const [hour, minute] = time.split(":");
  return ['09', '10', '11', '12', '13', '14', '15', '16'].includes(hour);
});

export const GraphStory = Template.bind({});
GraphStory.storyName = 'Graph';
GraphStory.args = {
  yLabelStep: 50,
  xLabelStep: 60,
  labels,
  data: labels.map((_) => {y+= 0.008; return perlin.get(1, y) * 300 + 200}),
  previousData: Math.random() * 150,
};
