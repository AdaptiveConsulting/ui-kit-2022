import { ComponentMeta, ComponentStory } from '@storybook/react';

import TableExample from './TableExample';

export default {
  title: 'Design System/Building Blocks/Table',
  component: TableExample,
} as ComponentMeta<typeof TableExample>;

const Template: ComponentStory<typeof TableExample> = () => <TableExample />;

export const TableExampleStory = Template.bind({});
