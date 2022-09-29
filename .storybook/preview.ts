import { themes } from '@storybook/theming';

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
        value: '#323232',
      },
      {
        name: 'normal',
        value: '#6B6B6B',
      },
      {
        name: 'light',
        value: '#FFFFFF',
      },
    ],
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: '#323232' },
    // Override the default light theme
    light: { ...themes.normal, appBg: '#FFFFFF' },
  },
};
