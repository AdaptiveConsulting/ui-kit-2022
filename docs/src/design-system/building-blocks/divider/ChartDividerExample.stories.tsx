import { ComponentMeta, ComponentStory } from '@storybook/react';

import ChartDividerExample from './ChartDividerExample';

export default {
  title: 'Design System / Building Blocks / Divider',
  component: ChartDividerExample,
} as ComponentMeta<typeof ChartDividerExample>;

const Template: ComponentStory<typeof ChartDividerExample> = () => (
  <ChartDividerExample />
);
export const ChartDivider = Template.bind({});
