/*
 * Palette definitions for light and dark themes.
 * Material UI theme schema reference: https://mui.com/material-ui/customization/default-theme/
 */

import { alpha, PaletteOptions } from '@mui/material';

// Palette and PalleteOptions types can be extended here as needed

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    buy: Palette['primary'];
    sell: Palette['primary'];
  }

  interface PaletteOptions {
    buy: PaletteOptions['primary'];
    sell: PaletteOptions['primary'];
  }
}

// TODO: Define MUI palettes for light theme
export const light: PaletteOptions = {
  mode: 'light',
  divider: alpha('#383838', 0.2), // Todo: Import base color (not alpha) from tokens file (Grey 900)
  common: {
    black: '#000',
    white: '#FFF',
  },
  primary: {
    main: '#a9abd1',
    dark: '#5f618d',
    light: '#DBDDFF',
  },
  secondary: {
    main: '#2d96ff',
    dark: '#005195',
    light: '#76c6ff',
  },
  error: {
    main: '#ff274b',
    dark: '#b60017',
    light: '#ff6877',
  },
  warning: {
    main: '#ff8d00',
    dark: '#ea4f01',
    light: '#ffbe45',
  },
  info: {},
  success: {
    main: '#01c38d',
    dark: '#01603d',
    light: '#5DF7BD',
  },
  buy: {
    main: '#2d96ff',
    dark: '#005195',
    light: '#76c6ff',
  },
  sell: {
    main: '#ff274b',
    dark: '#b60017',
    light: '#ff6877',
  },
  grey: {
    50: '#f9f9f9',
    100: '#f2f2f2',
    200: '#e4e4e4',
    300: '#cfcfcf',
    400: '#bbbbbb',
    500: '#7f7f7f',
    600: '#6b6b6b',
    700: '#555555',
    800: '#4d4d4d',
    900: '#383838',
    A100: '#f2f2f2',
    A200: '#e4e4e4',
    A400: '#bbbbbb',
    A700: '#555555',
  },
  text: {
    primary: 'rgba(0, 0, 0, 1)',
    secondary: 'rgba(0, 0, 0, 0.83)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
};

// TODO: Define MUI palettes for dark theme
export const dark: PaletteOptions = {
  mode: 'dark',
  divider: alpha('#F9F9F9', 0.2), // Todo: Import base color (not alpha) from tokens file (Grey 50)
  common: {
    black: '#000',
    white: '#FFF',
  },
  primary: {
    main: '#A9ABD1',
    dark: '#797CA0',
    light: '#DBDDFF',
  },
  secondary: {
    main: '#00AEFF',
    dark: '#007FCB',
    light: '#69E0FF',
  },
  error: {
    main: '#FF274B',
    dark: '#C40024',
    light: '#FF6877',
  },
  warning: {
    main: '#FF8D00',
    dark: '#C55E00',
    light: '#FFBE45',
  },
  success: {
    main: '#009160',
    dark: '#01603d',
    light: '#5DF7BD',
  },
  buy: {
    main: '#2d96ff',
    dark: '#005195',
    light: '#76c6ff',
  },
  sell: {
    main: '#ff274b',
    dark: '#b60017',
    light: '#ff6877',
  },
  grey: {
    50: '#f9f9f9',
    100: '#f2f2f2',
    200: '#e4e4e4',
    300: '#cfcfcf',
    400: '#bbbbbb',
    500: '#7f7f7f',
    600: '#6b6b6b',
    700: '#555555',
    800: '#4d4d4d',
    900: '#383838',
    A100: '#f2f2f2',
    A200: '#e4e4e4',
    A400: '#bbbbbb',
    A700: '#555555',
  },
  text: {
    primary: 'rgba(0, 0, 0, 1)',
    secondary: 'rgba(0, 0, 0, 0.83)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
};
