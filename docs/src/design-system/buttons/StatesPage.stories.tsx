import { ComponentMeta, ComponentStory } from '@storybook/react';

import StatesPage from './StatesPage';
// import addons from '@storybook/addons';
// import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

// const channel = addons.getChannel();
// channel.on(DARK_MODE_EVENT_NAME, () => {
//   console.log('hihi');
// });

export default {
  title: 'Design System/Buttons',
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
