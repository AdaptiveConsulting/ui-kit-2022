import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import LogoBrand from '../Branding/LogoBrand/LogoBrand';
import LogoText from '../Branding/LogoText/LogoText';

export default function SplashScreen() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <LogoBrand
        width={isSmallScreen ? 104 : undefined}
        height={isSmallScreen ? 103 : undefined}
      />
      <LogoText
        width={isSmallScreen ? 169 : undefined}
        height={isSmallScreen ? 56 : undefined}
      />
      <Typography
        sx={{
          fontWeight: '400',
          fontSize: { sm: '25px', xs: '20px' },
          fontFamily: `Merriweather, serif`,
        }}
        data-testid={'loading-text'}
      >
        Loading...
      </Typography>
    </Box>
  );
}
