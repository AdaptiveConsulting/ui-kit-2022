import { ComponentMeta, ComponentStory } from '@storybook/react';

import UsageExample from './UsageExample';

export default {
  title: 'Design System / Building Blocks / Button',
  component: UsageExample,
  argTypes: {
    title: {
      options: ['Dark', 'Light'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof UsageExample>;

const Template: ComponentStory<typeof UsageExample> = (args) => (
  <UsageExample {...args} />
);

export const UsageExampleStory = Template.bind({});
UsageExampleStory.args = {
  title: 'Dark',
};

UsageExampleStory.storyName = 'Usage Example';
