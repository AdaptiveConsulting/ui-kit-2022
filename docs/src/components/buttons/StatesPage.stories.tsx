import { ComponentMeta, ComponentStory } from '@storybook/react';

import StatesPage from './StatesPage';

export default {
  title: 'Components/Button',
  component: StatesPage,
} as ComponentMeta<typeof StatesPage>;

const Template: ComponentStory<typeof StatesPage> = () => <StatesPage />;

export const States = Template.bind({});
States.parameters = {
  pseudo: {
    hover: '.hover',
    focus: '.focus',
    active: '.active',
  },
};
