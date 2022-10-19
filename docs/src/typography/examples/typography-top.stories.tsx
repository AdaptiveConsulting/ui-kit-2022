import React from 'react';

import TopBar from '../../common/top-bar';

export default {
  title: 'Typography/Examples',
  component: TopBar,
  argTypes: {
    title: {
      options: ['TYPES', 'STYLE'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <TopBar {...args} />;

export const TypographyTopStory = Template.bind({});

TypographyTopStory.args = {
  title: 'TYPES',
};
