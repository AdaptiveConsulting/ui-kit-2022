import { themes } from '@storybook/theming';

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
