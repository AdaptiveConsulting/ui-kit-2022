import { Theme } from '@mui/material';

export default {
  defaultProps: {
    color: 'secondary',
  },
  styleOverrides: {
    root: {
      height: 5,
      borderRadius: 10,
    },
    colorSecondary: ({ theme: { palette } }: { theme: Theme }) => ({
      backgroundColor: { light: palette.grey[200], dark: palette.grey[700] }[
        palette.mode
      ],
    }),
    barColorSecondary: ({ theme: { palette } }: { theme: Theme }) => ({
      backgroundColor: { light: palette.paper.black, dark: palette.paper.white }[
        palette.mode
      ],
    }),
    determinate: ({ ownerState }: any) =>
      ownerState.value === 0 && {
        borderTopLeftRadius: '0 !important',
        borderBottomLeftRadius: '0 !important',
      },
    bar1Determinate: ({ ownerState }: any) =>
      ownerState.value === 0
        ? {
            left: 1,
          }
        : {
            borderRadius: 10,
          },
  },
};
