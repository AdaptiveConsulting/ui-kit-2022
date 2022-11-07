import { ComponentMeta, ComponentStory } from '@storybook/react';

import UsageExample from './UsageExample';

export default {
  title: 'Design System / Building Blocks / Button',
  component: UsageExample,
} as ComponentMeta<typeof UsageExample>;

const Template: ComponentStory<typeof UsageExample> = () => <UsageExample />;

export const UsageExampleStory = Template.bind({});

UsageExampleStory.storyName = 'Usage Example';
