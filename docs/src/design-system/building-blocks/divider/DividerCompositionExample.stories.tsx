import { ComponentMeta, ComponentStory } from '@storybook/react';

import DividerCompositionExample from './DividerCompositionExample';

export default {
  title: 'Design System / Building Blocks / Divider',
  component: DividerCompositionExample,
  argTypes: {
    variant: {
      name: 'Variant',
      options: ['fullWidth', 'bold', 'inset', 'middle'],
      defaultValue: 'fullWidth',
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof DividerCompositionExample>;

const Template: ComponentStory<typeof DividerCompositionExample> = (args) => (
  <DividerCompositionExample {...args} />
);
export const CompositionExample = Template.bind({});
