import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import FontMerriweatherExamples from './font-merriweather-examples';

export default {
  title: 'Components/typography',
  component: FontMerriweatherExamples,
};

const Template = (args) => <FontMerriweatherExamples {...args} />;

export const FontMerriWeatherExamplesStory = Template.bind({});
