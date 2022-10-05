import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TypographyTop from './typography-top';

export default {
  title: 'Components/typography',
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
