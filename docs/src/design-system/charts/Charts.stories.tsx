import { ComponentMeta, ComponentStory } from '@storybook/react';

import Charts from './Charts';

export default {
  title: 'Design System/Charts',
  component: Charts,
} as ComponentMeta<typeof Charts>;

const Template: ComponentStory<typeof Charts> = () => <Charts />;

export const chartsStory = Template.bind({});

chartsStory.storyName = 'Charts';
