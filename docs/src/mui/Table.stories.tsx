import { ComponentMeta, ComponentStory } from '@storybook/react';

import Table from './Table';

export default {
  title: 'Material UI/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => {
  return <Table />;
};

export const TableStory = Template.bind({});

TableStory.storyName = 'Table';
