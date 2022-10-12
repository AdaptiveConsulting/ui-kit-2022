import { createTheme } from '@mui/material/styles';

import { components } from './overrides';
import * as palette from './palette';
import spacing from './spacing';
import { THEME_TYPOGRAPHY as typography } from './typography';

export const light = createTheme({
  components,
  palette: palette.light,
  typography,
  spacing,
});

export const dark = createTheme({
  components,
  palette: palette.dark,
  typography,
  spacing,
});
