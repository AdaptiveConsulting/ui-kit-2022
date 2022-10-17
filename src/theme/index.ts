import { createTheme } from '@mui/material/styles';

import { DARK_COMPONENTS, LIGHT_COMPONENTS } from './overrides';
import * as palette from './palette';
import spacing from './spacing';
import { THEME_TYPOGRAPHY as typography } from './typography';

export const light = createTheme({
  components: LIGHT_COMPONENTS,
  palette: palette.light,
  typography,
  spacing,
});

export const dark = createTheme({
  components: DARK_COMPONENTS,
  palette: palette.dark,
  typography,
  spacing,
});
