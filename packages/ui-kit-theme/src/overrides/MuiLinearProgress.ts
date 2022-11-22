import { LinearProgressProps, Theme } from '@mui/material';

type OverrideContext = {
  theme: Theme;
  ownerState: LinearProgressProps;
};

export default {
  defaultProps: {
    color: 'secondary' as const,
  },
  styleOverrides: {
    root: {
      height: 5,
      borderRadius: 10,
    },
    colorSecondary: ({ theme: { palette } }: OverrideContext) => ({
      backgroundColor: { light: palette.grey[200], dark: palette.grey[700] }[
        palette.mode
      ],
    }),
    barColorSecondary: ({ theme: { palette } }: OverrideContext) => ({
      backgroundColor: { light: palette.paper.black, dark: palette.paper.white }[
        palette.mode
      ],
    }),
    determinate: ({ ownerState }: OverrideContext) =>
      ownerState.value === 0 && {
        borderTopLeftRadius: '0 !important',
        borderBottomLeftRadius: '0 !important',
      },
    bar1Determinate: ({ ownerState }: OverrideContext) =>
      ownerState.value === 0
        ? {
            left: 1,
          }
        : {
            borderRadius: 10,
          },
  },
};
