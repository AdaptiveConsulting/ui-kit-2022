import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import FontExamples from './font-examples';

export default {
  title: 'Docs/Components/Typography',
  component: FontExamples,
  argTypes: {
    fontName: {
      options: ['roboto', 'merriweather'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <FontExamples {...args} />;

export const FontExamplesStory = Template.bind({});

FontExamplesStory.args = {
  fontName: 'roboto',
};
