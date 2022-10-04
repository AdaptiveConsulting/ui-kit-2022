import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import FontExmaples from './font-examples';

export default {
  title: 'Components/typography',
  component: FontExmaples,
};

const Template = (args) => <FontExmaples {...args} />;

export const FontExamplesStory = Template.bind({});

FontExamplesStory.args = {};
