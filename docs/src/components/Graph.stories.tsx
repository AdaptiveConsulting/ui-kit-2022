import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Graph } from '@ui-kit-2022/components';
import * as React from 'react';
import { useTheme } from '@emotion/react';
export default {
  title: 'Components/Graph',
  component: Graph,
} as ComponentMeta<typeof Graph>;

const Template: ComponentStory<typeof Graph> = (props) => {
return <Graph {...props}/>};

export const GraphStory = Template.bind({});
GraphStory.storyName = 'Graph';
GraphStory.args = {
  yLabelNumbers: 5,
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  data: [23, 45, 132, 124, 32, 54, 89],
}

