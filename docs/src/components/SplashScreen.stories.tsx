import { Box } from '@mui/material';
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
  <Box sx={{ minHeight: '100vh' }}>
    <SplashScreenStory {...args} />
  </Box>
);

export const Screen = Template.bind({});

Screen.args = { showSplash: true };

Screen.storyName = 'Splash Screen';
