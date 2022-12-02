import { ComponentMeta, ComponentStory } from '@storybook/react';

import ButtonStatesExample from './ButtonStatesExample';

export default {
  title: 'Design System / Building Blocks / Button',
  component: ButtonStatesExample,
  argTypes: {
    variantType: {
      options: ['PRIMARY', 'SECONDARY', 'TERTIARY'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ButtonStatesExample>;

const Template: ComponentStory<typeof ButtonStatesExample> = (args) => (
  <ButtonStatesExample {...args} />
);
export const StatesExample = Template.bind({});
StatesExample.args = {
  variantType: 'PRIMARY',
};
StatesExample.parameters = {
  pseudo: {
    hover: '.hover',
    focus: '.focus',
    active: '.active',
  },
};
