import { ComponentMeta, ComponentStory } from '@storybook/react';

import UsagePage from './UsagePage';

export default {
  title: 'Design System/Buttons',
  component: UsagePage,
} as ComponentMeta<typeof UsagePage>;

const Template: ComponentStory<typeof UsagePage> = () => <UsagePage />;

export const Usage = Template.bind({});
