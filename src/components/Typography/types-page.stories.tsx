import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TypesPage from './types-page';

export default {
  title: 'Components/Typography',
  component: TypesPage,
};

const Template = (args) => <TypesPage {...args} />;

export const TypesPageStory = Template.bind({});

TypesPageStory.args = {};
