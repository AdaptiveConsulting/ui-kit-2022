import { createTheme } from '@mui/material/styles';

import * as palette from './palette';
import { THEME_TYPOGRAPHY } from './typography';

export const light = createTheme({
  palette: palette.light,
  typography: THEME_TYPOGRAPHY,
});

export const dark = createTheme({
  palette: palette.dark,
  typography: THEME_TYPOGRAPHY,
});
