import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TextSample from './text-sample';

export default {
  title: 'Docs/Components/Typography',
  component: TextSample,
  argTypes: {
    fontName: {
      options: ['roboto', 'merriweather'],
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
