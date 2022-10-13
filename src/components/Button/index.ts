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

export {};
