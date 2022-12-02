import { alpha, ButtonGroupProps, Theme } from '@mui/material';

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsVariantOverrides {
    control: true;
  }
}

type OverrideContext = {
  theme: Theme;
};

export default {
  defaultProps: {
    disableFocusRipple: true,
    disableRipple: true,
  },
  variants: [
    {
      props: { variant: 'primary' as ButtonGroupProps['variant'] },
      style: ({ theme }: OverrideContext) => ({
        backgroundColor:
          theme.palette.mode === 'dark'
            ? theme.palette.grey[800]
            : theme.palette.grey[100],
        ' > button': {
          borderRadius: 'inherit',
          minWidth: 'auto !important',
          padding: theme.spacing(1),
          textTransform: 'none',
          fontWeight: 400,
        },
        '> button:hover': {
          backgroundColor:
            theme.palette.mode === 'dark'
              ? theme.palette.grey[700]
              : theme.palette.grey[200],
        },
        '> button:hover, > .MuiButton-PRIMARY': {
          fontWeight: 500,
        },
        ' > .MuiButtonGroup-groupedHorizontal:not(:last-of-type)': {
          borderRight: `1px solid ${alpha(
            theme.palette.mode === 'dark'
              ? theme.palette.paper.white
              : theme.palette.paper.black,
            0.2,
          )}`,
        },
      }),
    },
  ],
  styleOverrides: {
    root: () => ({
      ' > button': {
        borderRadius: 'inherit',
      },
    }),
  },
};
