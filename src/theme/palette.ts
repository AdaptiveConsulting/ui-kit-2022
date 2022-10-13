/*
 * Palette definitions for light and dark themes.
 * Material UI theme schema reference: https://mui.com/material-ui/customization/default-theme/
 */

import { alpha, PaletteOptions } from '@mui/material';

// Palette and PalleteOptions types can be extended here as needed
/*
declare module '@mui/material/styles/createPalette' {
  // interface Palette {}
  // interface PaletteOptions {}
}
*/

// TODO: Define MUI palettes for light theme
export const light: PaletteOptions = {
  mode: 'light',
  divider: alpha('#383838', 0.2), // Todo: Import base color (not alpha) from tokens file (Grey 900)
  action: {
    disabledBackground: '#E4E4E4',
    disabled: '#6B6B6B',
  },
};

// TODO: Define MUI palettes for dark theme
export const dark: PaletteOptions = {
  mode: 'dark',
  divider: alpha('#F9F9F9', 0.2), // Todo: Import base color (not alpha) from tokens file (Grey 50)
  action: {
    disabledBackground: '#E4E4E4',
    disabled: '#6B6B6B',
  },
};
