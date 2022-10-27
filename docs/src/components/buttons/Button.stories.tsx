import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@ui-kit-2022/components';
import * as React from 'react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['PRIMARY', 'SECONDARY', 'TERTIARY'],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>;

export const Basic = Template.bind({});

Basic.args = {
  variant: 'PRIMARY',
  children: 'Hello Adaptive',
};

export const LeftIcon = Template.bind({});

LeftIcon.args = {
  variant: 'PRIMARY',
  children: 'Hello Adaptive',
  icon: 'left',
};

export const RightIcon = Template.bind({});

RightIcon.args = {
  variant: 'PRIMARY',
  children: 'Hello Adaptive',
  icon: 'right',
};
