import { createTheme } from '@mui/material/styles';

import { DARK_COMPONENTS, LIGHT_COMPONENTS } from './overrides';
import * as palette from './palette';
import spacing from './spacing';
import { THEME_TYPOGRAPHY as typography } from './typography';

export * from './constants';

export { palette, spacing };

export const light = createTheme({
  components: LIGHT_COMPONENTS as any,
  palette: palette.light,
  typography,
  spacing,
});

export const dark = createTheme({
  components: DARK_COMPONENTS as any,
  palette: palette.dark,
  typography,
  spacing,
});
