import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Graph } from '@ui-kit-2022/components';
import * as React from 'react';
import { useTheme } from '@emotion/react';
export default {
  title: 'Components/Graph',
  component: Graph,
} as ComponentMeta<typeof Graph>;
import { faker } from '@faker-js/faker';

const Template: ComponentStory<typeof Graph> = (props) => {
return <Graph {...props}/>};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July']

export const GraphStory = Template.bind({});
GraphStory.storyName = 'Graph';
GraphStory.args = {
  yLabelNumbers: 10,
  labels,
  data: labels.map( _ => faker.datatype.number({min: 20, max: 500})),
}

