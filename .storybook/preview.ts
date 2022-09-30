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
    dark: { ...themes.dark, appBg: '#323232', appContentBg: '#383838' },
    // Override the default light theme
    light: { ...themes.normal, appBg: '#FFFFFF', appContentBg: '#F9F9F9' },
  },
};
