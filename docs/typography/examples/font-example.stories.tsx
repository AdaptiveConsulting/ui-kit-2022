import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import FontExmaple from './font-example';

export default {
  title: 'Typography/Examples',
  component: FontExmaple,
  argTypes: {
    title: {
      options: ['Regular', 'Light Italic', 'Medium'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof FontExmaple>;

const Template = (args) => <FontExmaple {...args} />;

export const FontExampleStory: ComponentStory<typeof FontExmaple> = Template.bind({});

FontExampleStory.args = {
  title: 'Light Italic',
  content: 'Miscellaneous {ex: time stamps}',
};
