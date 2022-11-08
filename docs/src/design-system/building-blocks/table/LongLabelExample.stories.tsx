import { ComponentMeta, ComponentStory } from '@storybook/react';

import LongLabelExample from './LongLabelExample';

export default {
  title: 'Design System/Building Blocks/Table',
  component: LongLabelExample,
  argTypes: {
    longLabel: {
      name: 'longLabel',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
      defaultValue:
        'Label (Subheader Small, Primary opacity) - This is a long label name.',
    },
    value: {
      name: 'value',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
      defaultValue: 'Value (Regular, Secondary Opacity)  - This is a long value name.',
    },
  },
} as ComponentMeta<typeof LongLabelExample>;

const Template: ComponentStory<typeof LongLabelExample> = (args) => (
  <LongLabelExample {...args} />
);

export const LongLabel = Template.bind({});
