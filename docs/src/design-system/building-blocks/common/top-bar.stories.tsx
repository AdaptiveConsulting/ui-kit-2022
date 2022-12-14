import React from 'react';

import TopBar from './top-bar';

export default {
  title: 'Design System/Building Blocks/Common',
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

TypographyTopStory.storyName = 'Typography Top';
