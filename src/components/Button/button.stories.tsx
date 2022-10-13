import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import ButtonDefault from './button';

export default {
  title: 'Components/Button',
  component: ButtonDefault,
  argTypes: {
    variant: {
      options: ['PRIMARY', 'SECONDARY', 'TERTIARY'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ButtonDefault>;

const Template: ComponentStory<typeof ButtonDefault> = (args) => (
  <ButtonDefault {...args}></ButtonDefault>
);

export const Basic = Template.bind({});

Basic.args = {
  variant: 'PRIMARY',
  children: 'Hello Adaptive',
  click: () => alert('This is a text button'),
};

export const LeftIcon = Template.bind({});

LeftIcon.args = {
  variant: 'PRIMARY',
  children: 'Hello Adaptive',
  icon: 'left',
  click: () => alert('This is a text button'),
};

export const RightIcon = Template.bind({});

RightIcon.args = {
  variant: 'PRIMARY',
  children: 'Hello Adaptive',
  icon: 'right',
  click: () => alert('This is a text button'),
};
