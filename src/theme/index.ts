import { createTheme } from '@mui/material/styles';
import * as palette from './palette';

// See: https://mui.com/material-ui/customization/default-theme/

export const light = createTheme({
  palette: palette.light
});

export const dark = createTheme({
  palette: palette.dark
});
