import { ComponentMeta, ComponentStory } from '@storybook/react';

import Example from './example';

export default {
  title: 'Components/Example',
  component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />;

export const HelloWorld = Template.bind({});

HelloWorld.args = {};
