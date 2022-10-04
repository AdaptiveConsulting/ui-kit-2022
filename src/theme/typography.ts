import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subheader1: React.CSSProperties;
    subheader2: React.CSSProperties;
    subheader3: React.CSSProperties;
    subheader4: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subheader1?: React.CSSProperties;
    subheader2?: React.CSSProperties;
    subheader3?: React.CSSProperties;
    subheader4?: React.CSSProperties;
  }
}

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

export const typography = createTheme({
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Merriweather',
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontSize: 24,
      textAlign: 'left',
      fontWeight: 500,
      textTransform: 'capitalize',
      fontFamily: 'Roboto',
    },
    h2: {
      fontSize: 20,
      textAlign: 'left',
      fontWeight: 500,
      textTransform: 'capitalize',
      fontFamily: 'Roboto',
    },
    h3: {
      fontSize: 32,
      textAlign: 'left',
      fontWeight: 400,
      textTransform: 'capitalize',
      fontFamily: 'Merriweather',
    },
    h4: {
      fontSize: 16,
      textAlign: 'left',
      fontWeight: 400,
      textTransform: 'capitalize',
      fontFamily: 'Merriweather',
    },
    body1: {
      fontSize: 16,
      textAlign: 'left',
      fontWeight: 400,
      textTransform: 'none',
      fontFamily: 'Roboto',
    },
    body2: {
      fontSize: 12,
      textAlign: 'left',
      fontWeight: 400,
      textTransform: 'none',
      fontFamily: 'Roboto',
    },
    caption: {
      fontSize: 11,
      textAlign: 'left',
      fontWeight: 300,
      fontStyle: 'italic',
      textTransform: 'none',
      fontFamily: 'Roboto',
    },
    subheader1: {
      fontSize: 16,
      textAlign: 'left',
      fontWeight: 500,
      textTransform: 'capitalize',
      fontFamily: 'Roboto',
    },
    subheader2: {
      fontSize: 13,
      textAlign: 'left',
      fontWeight: 500,
      textTransform: 'capitalize',
      fontFamily: 'Merriweather',
    },
    subheader3: {
      fontSize: 12,
      textAlign: 'left',
      fontWeight: 500,
      textTransform: 'capitalize',
      fontFamily: 'Roboto',
    },
    subheader4: {
      fontSize: 11,
      textAlign: 'left',
      fontWeight: 500,
      textTransform: 'capitalize',
      fontFamily: 'Roboto',
    },
  },
});
