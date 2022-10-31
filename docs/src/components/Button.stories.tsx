import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@ui-kit-2022/components';
import * as React from 'react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['PRIMARY', 'SECONDARY', 'TERTIARY'],
      defaultValue: 'PRIMARY',
      control: { type: 'radio' },
    },
    children: {
      control: 'text',
      defaultValue: 'Hello Adaptive',
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
      defaultValue: false,
    },
    icon: {
      options: ['left', 'right', 'none'],
      control: { type: 'radio' },
      defaultValue: 'none',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>;

export const ButtonStory = Template.bind({});
ButtonStory.storyName = 'Button';
ButtonStory.args = {
  click: action('click'),
};
