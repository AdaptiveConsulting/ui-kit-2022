/*
 * Palette definitions for light and dark themes.
 * Material UI theme schema reference: https://mui.com/material-ui/customization/default-theme/
 */

import { alpha, PaletteOptions } from '@mui/material';

// Palette and PaletteOptions types can be extended here as needed

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    buy: PaletteColor;
    sell: PaletteColor;
  }

  interface PaletteOptions {
    buy: PaletteColorOptions;
    sell: PaletteColorOptions;
  }
}

// common color values for both themes
const BASIC_COLOR: PaletteOptions = {
  common: {
    black: '#000',
    white: '#FFF',
  },
  primary: {
    main: '#A9ABD1',
    dark: '#5F618D',
    light: '#DBDDFF',
  },
  secondary: {
    main: '#2D96FF',
    dark: '#005195',
    light: '#76C6FF',
  },
  error: {
    main: '#FF274B',
    dark: '#B60017',
    light: '#FF6877',
  },
  warning: {
    main: '#FF8D00',
    dark: '#EA4F01',
    light: '#FFBE45',
  },
  success: {
    main: '#01C38D',
    dark: '#01603D',
    light: '#5DF7BD',
  },
  buy: {
    main: '#2D96FF',
    dark: '#005195',
    light: '#76C6FF',
  },
  sell: {
    main: '#FF274B',
    dark: '#B60017',
    light: '#FF6877',
  },
  grey: {
    50: '#F9F9F9',
    100: '#F2F2F2',
    200: '#E4E4E4',
    300: '#CFCFCF',
    400: '#BBBBBB',
    500: '#7F7F7F',
    600: '#6B6B6B',
    700: '#555555',
    800: '#4D4D4D',
    900: '#383838',
    A100: '#F2F2F2',
    A200: '#E4E4E4',
    A400: '#BBBBBB',
    A700: '#555555',
  },
};

// TODO: Define MUI palettes for light theme
export const light: PaletteOptions = {
  mode: 'light',
  ...BASIC_COLOR,
  divider: alpha('#383838', 0.2), // Todo: Import base color (not alpha) from tokens file (Grey 900)
  contrastThreshold: 3,
  tonalOffset: 2,
  text: {
    primary: 'rgba(0, 0, 0, 0.95)',
    secondary: 'rgba(0, 0, 0, 0.83)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  background: {
    paper: '#F9F9F9',
  },
  action: {
    disabledBackground: '#E4E4E4',
    disabled: '#6B6B6B',
  },
};

// TODO: Define MUI palettes for dark theme
export const dark: PaletteOptions = {
  mode: 'dark',
  ...BASIC_COLOR,
  divider: alpha('#F9F9F9', 0.2), // Todo: Import base color (not alpha) from tokens file (Grey 50)
  contrastThreshold: 3,
  tonalOffset: 2,
  text: {
    primary: 'rgba(255, 255, 255, 0.95)',
    secondary: 'rgba(255, 255, 255, 0.83)',
    disabled: 'rgba(255, 255, 255, 0.38)',
  },
  background: {
    paper: '#323232',
  },
  action: {
    disabledBackground: '#E4E4E4',
    disabled: '#6B6B6B',
  },
};
