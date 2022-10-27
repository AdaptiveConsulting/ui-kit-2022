import { ComponentMeta, ComponentStory } from '@storybook/react';

import DosDontsExample from './DosDontsExample';

export default {
  title: 'Design System / Building Blocks / Button',
  component: DosDontsExample,
  argTypes: {
    exampleType: {
      options: ['Do', 'Dont'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof DosDontsExample>;

const Template: ComponentStory<typeof DosDontsExample> = (args) => (
  <DosDontsExample {...args} />
);

export const DosDontsExampleStory = Template.bind({});
DosDontsExampleStory.args = {
  exampleType: 'Do',
};

DosDontsExampleStory.storyName = "Dos Don'ts Example";
