import { themes } from '@storybook/theming';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styled from '@emotion/styled';

import { light, dark } from '../src/theme/index';

const themeDefaults = {
  brandTitle: 'Adaptive UI Kit 2022',
  brandUrl: 'https://weareadaptive.com/',
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'dark',
        value: '#383838',
      },
      {
        name: 'light',
        value: '#F9F9F9',
      },
    ],
  },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      ...themeDefaults,
      appBg: '#323232',
      appContentBg: '#383838',
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

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const StoryContainer = styled.div(() => ({
      margin: 0,
      padding: '1rem',
      width: '100%',
      height: '100%',
      backgroundColor: `${context.globals.theme === 'light' ? '#F9F9F9' : '#383838'}`,
    }));

    return (
      <>
        <ThemeProvider theme={context.globals.theme === 'light' ? light : dark}>
          <CssBaseline />
          <StoryContainer>
            <Story />
          </StoryContainer>
        </ThemeProvider>
      </>
    );
  },
];
