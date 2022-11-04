import { ComponentMeta, ComponentStory } from '@storybook/react';

import LightBgState from './LightBgState';

export default {
  title: 'Design System / Building Blocks / Button',
  component: LightBgState,
  argTypes: {
    variantType: {
      options: ['PRIMARY', 'SECONDARY', 'TERTIARY'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof LightBgState>;

const Template: ComponentStory<typeof LightBgState> = (args) => (
  <LightBgState {...args} />
);
export const LightBgStateStory = Template.bind({});
LightBgStateStory.args = {
  variantType: 'Primary',
};

LightBgStateStory.storyName = 'Light Bg State';