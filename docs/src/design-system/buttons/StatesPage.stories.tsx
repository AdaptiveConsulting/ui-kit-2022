import { ComponentMeta, ComponentStory } from '@storybook/react';

import StatesPage from './StatesPage';

export default {
  title: 'Design System/Buttons',
  component: StatesPage,
} as ComponentMeta<typeof StatesPage>;

const Template: ComponentStory<typeof StatesPage> = () => <StatesPage />;

export const States = Template.bind({});
States.parameters = {
  pseudo: {
    hover: '.hover',
    focusVisible: '.focus',
    active: '.active',
  },
};
