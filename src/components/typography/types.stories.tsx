import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Types from './types';

export default {
  title: 'Components/Typography',
  component: Types,
};

const Template = (args) => <Types {...args} />;

export const TypesStory = Template.bind({});

TypesStory.args = {};
