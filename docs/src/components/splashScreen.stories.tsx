import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SplashScreen } from '@ui-kit-2022/components';

export default {
  title: 'Components/Branding',
  component: SplashScreen,
} as ComponentMeta<typeof SplashScreen>;

const Template: ComponentStory<typeof SplashScreen> = () => <SplashScreen />;

export const Screen = Template.bind({});

Screen.storyName = 'Splash Screen';
