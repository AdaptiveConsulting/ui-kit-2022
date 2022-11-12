import { ComponentMeta, ComponentStory } from '@storybook/react';

import DividerUsagePage from './DividerUsagePage';

export default {
  title: 'Design System / Dividers',
  component: DividerUsagePage,
} as ComponentMeta<typeof DividerUsagePage>;

const Template: ComponentStory<typeof DividerUsagePage> = () => <DividerUsagePage />;
export const DividerUsage = Template.bind({});
