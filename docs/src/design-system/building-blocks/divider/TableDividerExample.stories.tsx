import { ComponentMeta, ComponentStory } from '@storybook/react';

import TableDividerExample from './TableDividerExample';

export default {
  title: 'Design System / Building Blocks / Divider',
  component: TableDividerExample,
  argTypes: {
    dividerDo: {
      name: 'Divider Do',
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof TableDividerExample>;

const Template: ComponentStory<typeof TableDividerExample> = (args) => (
  <TableDividerExample {...args} />
);
export const TableDivider = Template.bind({});
