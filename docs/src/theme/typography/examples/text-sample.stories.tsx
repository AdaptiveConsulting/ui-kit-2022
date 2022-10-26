import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MERRIWEATHER, ROBOTO } from '@ui-kit-2022/theme';
import React from 'react';

import TextSample from './text-sample';

export default {
  title: 'Theme/Typography',
  component: TextSample,
  argTypes: {
    fontName: {
      options: [ROBOTO, MERRIWEATHER],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof TextSample>;

const Template: ComponentStory<typeof TextSample> = (args) => {
  return <TextSample {...args} />;
};

export const TextSampleStory = Template.bind({});

TextSampleStory.args = {
  fontName: ROBOTO,
};

TextSampleStory.storyName = 'Text Sample';
