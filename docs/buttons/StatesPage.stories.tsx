import { ComponentMeta, ComponentStory } from '@storybook/react';

import StatesPage from './StatesPage';

export default {
  title: 'Docs/Button/States',
  component: StatesPage,
} as ComponentMeta<typeof StatesPage>;

const Template: ComponentStory<typeof StatesPage> = () => <StatesPage />;

export const States = Template.bind({});
