import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TypographyTop from './typography-top';

export default {
  title: 'Docs/Components/Typography',
  component: TypographyTop,
  argTypes: {
    title: {
      options: ['TYPES', 'STYLE'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <TypographyTop {...args} />;

export const TypographyTopStory = Template.bind({});

TypographyTopStory.args = {
  title: 'TYPES',
};
