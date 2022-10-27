import { ComponentMeta, ComponentStory } from '@storybook/react';

import SplashScreenStory from './SplashScreenStory';

export default {
  title: 'Components/Branding',
  component: SplashScreenStory,
  argTypes: {
    showSplash: {
      options: [true, false],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof SplashScreenStory>;

const Template: ComponentStory<typeof SplashScreenStory> = (args) => (
  <SplashScreenStory {...args} />
);

export const Screen = Template.bind({});

Screen.args = { showSplash: true };

Screen.storyName = 'Splash Screen';
