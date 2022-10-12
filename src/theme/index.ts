import { createTheme } from '@mui/material/styles';

import MuiDivider from './overrides/MuiDivider';
import * as palette from './palette';
import { THEME_TYPOGRAPHY as typography } from './typography';

// Component overrides
const components = {
  MuiDivider,
};

export const light = createTheme({
  components,
  palette: palette.light,
  typography,
});

export const dark = createTheme({
  components,
  palette: palette.dark,
  typography,
});
