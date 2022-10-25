import { ComponentMeta, ComponentStory } from '@storybook/react';

import SplashScreenStory from './splashScreenStory';
// import { SplashScreen as SplashScreenStory } from '@ui-kit-2022/components';

export default {
  title: 'Components/Branding',
  component: SplashScreenStory,
  argTypes: {
    showSplash: {
      options: { true: true, false: false },
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
