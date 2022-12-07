import { keyframes } from '@emotion/react';
import {
  Theme,
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subheader1: 'h5',
  subheader2: 'h5',
  subheader3: 'h6',
  subheader4: 'h6',
  body1: 'p',
  body2: 'p',
};

const loadingFrames = keyframes`
0% {
  background-position: 0% 50%
},
50% {
  background-position: 100% 50%
},
100% {
  background-position: 0% 50%
}
`;

const loadingStyles = (theme: Theme) => ({
  '&:before': {
    content: '"-"',
    visibility: 'hidden',
  },
  width: '100%',
  borderRadius: '2px',
  background: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.2) 100%)`,
  backgroundSize: '200% 100%',
  animation: `${loadingFrames} 2s infinite linear`,
});

export interface TypographyProps extends MuiTypographyProps {
  loading: boolean;
}

const Typography = ({ loading, sx, children, ...props }: TypographyProps) => {
  let styles = sx;
  if (loading) {
    styles = Array.isArray(sx) ? [loadingStyles, ...sx] : [loadingStyles, sx];
  }
  return (
    <MuiTypography {...props} variantMapping={variantMapping} sx={styles}>
      {loading ? null : children}
    </MuiTypography>
  );
};

export default Typography;
