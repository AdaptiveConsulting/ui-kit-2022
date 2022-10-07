import Typography from '@mui/material/Typography';

export { Typography };
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subheader1: true;
    subtitle1: false;
    subheader2: true;
    subtitle2: false;
    subheader3: true;
    subheader4: true;
  }
}
