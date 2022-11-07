/*
 * Palette definitions for light and dark themes.
 * Material UI theme schema reference: https://mui.com/material-ui/customization/default-theme/
 */

import { alpha, PaletteOptions } from '@mui/material';

import tokens from './tokens.json';
import {
  PaperColor,
  PaperColorOption,
} from './utils/token-palette-mapper/token-palette-mapper';
import tokenPaletteMapper from './utils/token-palette-mapper/token-palette-mapper';
// Palette and PaletteOptions types can be extended here as needed

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    buy: PaletteColor;
    sell: PaletteColor;
    paper: PaperColor;
  }

  interface PaletteOptions {
    buy: PaletteColorOptions;
    sell: PaletteColorOptions;
    paper: PaperColorOption;
  }
}

const BASIC_COLOR = tokenPaletteMapper(tokens.global.Colors);
console.log('BASIC_COLOR', BASIC_COLOR);
// TODO: Define MUI palettes for light theme
export const light: PaletteOptions = {
  mode: 'light',
  ...BASIC_COLOR,
  divider: alpha('#383838', 0.2),
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
  divider: alpha('#F9F9F9', 0.2),
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
