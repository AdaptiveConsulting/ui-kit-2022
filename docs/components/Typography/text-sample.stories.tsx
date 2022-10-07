import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MERRIWEATHER, ROBOTO } from '../../../src';
import TextSample from './text-sample';
export default {
  title: 'Docs/Components/Typography',
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
  fontName: 'roboto',
};
