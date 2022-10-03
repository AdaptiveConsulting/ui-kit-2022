import { ComponentMeta, ComponentStory } from '@storybook/react';

import MaximizedLogo from './MaximizedLogo';

export default {
  title: 'Components/Icons',
  component: MaximizedLogo,
} as ComponentMeta<typeof MaximizedLogo>;

const Template: ComponentStory<typeof MaximizedLogo> = (args) => (
  <MaximizedLogo {...args} />
);

export const Maximized = Template.bind({});

Maximized.args = {
  textHeight: 32,
  iconHeight: 56,
  textWidth: 97,
  iconWidth: 55,
  color: '#323232',
};
