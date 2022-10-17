// See: https://mui.com/material-ui/customization/default-theme/

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
export const THEME_TYPOGRAPHY = {
  htmlFontSize: 16,
  fontFamily: 'Merriweather',
  fontSize: 12,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  h1: {
    fontSize: '1.5rem',
    textAlign: 'left',
    fontWeight: 500,
    textTransform: 'capitalize',
    fontFamily: 'Roboto',
  },
  h2: {
    fontSize: '1.25rem',
    textAlign: 'left',
    fontWeight: 500,
    textTransform: 'capitalize',
    fontFamily: 'Roboto',
  },
  h3: {
    fontSize: '2rem',
    textAlign: 'left',
    fontWeight: 400,
    textTransform: 'capitalize',
    fontFamily: 'Merriweather',
  },
  h4: {
    fontSize: '1rem',
    textAlign: 'left',
    fontWeight: 400,
    textTransform: 'capitalize',
    fontFamily: 'Merriweather',
  },
  body1: {
    fontSize: '1rem',
    textAlign: 'left',
    fontWeight: 400,
    textTransform: 'none',
    fontFamily: 'Roboto',
  },
  body2: {
    fontSize: '0.75rem',
    textAlign: 'left',
    fontWeight: 400,
    textTransform: 'none',
    fontFamily: 'Roboto',
  },
  caption: {
    fontSize: '0.6875rem',
    textAlign: 'left',
    fontWeight: 300,
    fontStyle: 'italic',
    textTransform: 'none',
    fontFamily: 'Roboto',
  },
  subheader1: {
    fontSize: '1rem',
    textAlign: 'left',
    fontWeight: 500,
    textTransform: 'capitalize',
    fontFamily: 'Roboto',
  },
  subheader2: {
    fontSize: '0.8125rem',
    textAlign: 'left',
    fontWeight: 500,
    textTransform: 'capitalize',
    fontFamily: 'Merriweather',
  },
  subheader3: {
    fontSize: '0.75rem',
    textAlign: 'left',
    fontWeight: 500,
    textTransform: 'capitalize',
    fontFamily: 'Roboto',
  },
  subheader4: {
    fontSize: '0.6875rem',
    textAlign: 'left',
    fontWeight: 500,
    textTransform: 'capitalize',
    fontFamily: 'Roboto',
  },
  button: {
    fontSize: '11px',
    textAlign: 'center',
    fontWeight: 500,
    fontFamily: 'Roboto',
  },
} as const;
