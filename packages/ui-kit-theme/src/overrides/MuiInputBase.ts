import { Theme } from '@mui/material';

export default {
  styleOverrides: {
    root: ({ theme, theme: { palette } }: { theme: Theme }) => ({
      paddingLeft: theme.spacing(3),
      caretColor: palette.primary.main,
      '&:hover:not(.Mui-disabled)': {
        '&:before': {
          borderColor: `${palette.grey[palette.mode === 'light' ? 400 : 500]} !important`,
        },
      },
      '&:before': {
        borderBottom: `2px solid ${
          palette.grey[palette.mode === 'light' ? 200 : 700]
        } !important`,
      },
    }),
    input: ({ theme }: { theme: Theme }) => ({
      fontFamily: theme.typography.fontFamily,
    }),
  },
};
