import Button, { Props as ButtonProps, VariantType as ButtonVariant } from './button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    PRIMARY: true;
    SECONDARY: true;
    TERTIARY: true;
    outlined: false;
    text: false;
    contained: false;
  }
}

export { Button };
export type { ButtonProps, ButtonVariant };
