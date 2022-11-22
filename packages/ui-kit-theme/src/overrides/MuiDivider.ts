import { alpha, Theme } from '@mui/material';

// Variant Overrides for Material Dividers
declare module '@mui/material/Divider' {
  interface DividerPropsVariantOverrides {
    bold: true;
  }
}

// Adaptive UI Kit Dividers support a 'bold' variant, which sets the Dividers opacity to 80%.
export default {
  variants: [
    {
      props: { variant: 'bold' } as const,
      style: ({
        theme,
        ownerState,
      }: {
        theme: Theme;
        ownerState?: { children: React.ReactChildren };
      }) => {
        const styleProps = { borderColor: alpha(theme.palette.divider, 0.8) };
        // BorderColor overrides must be applied to (&::before, &::after) instead of the root when "children" prop is defined.
        return ownerState && ownerState.children
          ? {
              '&::before, &::after': styleProps,
            }
          : styleProps;
      },
    },
  ],
};
