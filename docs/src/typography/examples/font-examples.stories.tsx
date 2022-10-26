import { MERRIWEATHER, ROBOTO } from '@ui-kit-2022/theme';
import React from 'react';

import FontExamples from './font-examples';
export default {
  title: 'Theme/Typography',
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

FontExamplesStory.storyName = 'Font Examples';
