import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import FontRobotoExamples from './font-roboto-examples';

export default {
  title: 'Components/Typography',
  component: FontRobotoExamples,
};

const Template = (args) => <FontRobotoExamples {...args} />;

export const FontRobotoExamplesStory = Template.bind({});
