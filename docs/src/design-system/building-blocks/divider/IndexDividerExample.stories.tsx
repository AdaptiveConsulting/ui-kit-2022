import { ComponentMeta, ComponentStory } from '@storybook/react';

import IndexDividerExample from './IndexDividerExample';

export default {
  title: 'Design System / Building Blocks / Divider',
  component: IndexDividerExample,
} as ComponentMeta<typeof IndexDividerExample>;

const Template: ComponentStory<typeof IndexDividerExample> = () => (
  <IndexDividerExample />
);
export const IndexDivider = Template.bind({});
