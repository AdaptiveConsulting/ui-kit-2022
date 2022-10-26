import React from 'react';

import TypesPage from './types-page';

export default {
  title: 'Design System/Typography',
  component: TypesPage,
};

const Template = (args) => <TypesPage {...args} />;

export const TypesPageStory = Template.bind({});

TypesPageStory.args = {};

TypesPageStory.storyName = 'Types Page';
