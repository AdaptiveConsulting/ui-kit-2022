import { ComponentMeta, ComponentStory } from '@storybook/react';

import TableUsagePage from './TableUsagePage';

export default {
  title: 'Design System',
  component: TableUsagePage,
} as ComponentMeta<typeof TableUsagePage>;

const Template: ComponentStory<typeof TableUsagePage> = () => <TableUsagePage />;

export const TableUsage = Template.bind({});
TableUsage.storyName = 'Tables';
