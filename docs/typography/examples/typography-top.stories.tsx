import React from 'react';

import TypographyTop from './typography-top';

export default {
  title: 'Typography/Examples',
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
