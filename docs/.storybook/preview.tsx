import '@ui-kit-2022/theme/dist/style.css';
import React from 'react';
import { themes } from '@storybook/theming';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styled from '@emotion/styled';
import addons from '@storybook/addons';
import { UPDATE_GLOBALS } from '@storybook/core-events';

import { light, dark } from '@ui-kit-2022/theme';
import { useDarkMode } from 'storybook-dark-mode';
//Included React import since sometimes not including it can result in a build failure
import { useEffect } from 'react';

const themeDefaults = {
  brandTitle: 'Adaptive UI Kit 2022',
  brandUrl: 'https://weareadaptive.com/',
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      ...themeDefaults,
      appBg: '#323232',
      appContentBg: '#323232',
      brandImage: 'brand-logo.light.svg',
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      ...themeDefaults,
      appBg: '#FFFFFF',
      appContentBg: '#F9F9F9',
      brandImage: 'brand-logo.dark.svg',
    },
  },
};

const channel = addons.getChannel();

const ThemeWrapper = ({ context, children }) => {
  const isDarkMode = useDarkMode();
  const pseudoStates = context.parameters.pseudo;

  useEffect(() => {
    // Force inject pseudo states when the theme mode changes if local pseudo states have been set.
    if (pseudoStates && context.viewMode !== 'docs') {
      channel.emit(UPDATE_GLOBALS, {
        globals: { pseudo: Object.assign({}, pseudoStates) },
      });
    }
  }, [isDarkMode, channel, context.id]);

  return <ThemeProvider theme={isDarkMode ? dark : light}>{children}</ThemeProvider>;
};

const StoryContainer = styled.div(({ theme }: any) => ({
  margin: 0,
  minWidth: '100vw',
  minHeight: '100vh',
  backgroundColor: `${theme.palette.mode === 'dark' ? '#323232' : '#F9F9F9'}`,
}));

export const decorators = [
  (Story, context) => (
    <ThemeWrapper context={context}>
      <CssBaseline />
      <StoryContainer>
        <Story />
      </StoryContainer>
    </ThemeWrapper>
  ),
];
