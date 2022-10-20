import React from 'react';

import { MERRIWEATHER, ROBOTO } from '../../../src';
import FontExamples from './font-examples';
export default {
  title: 'Typography/Examples',
  component: FontExamples,
  argTypes: {
    fontName: {
      options: [ROBOTO, MERRIWEATHER],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <FontExamples {...args} />;

export const FontExamplesStory = Template.bind({});

FontExamplesStory.args = {
  fontName: ROBOTO,
};
