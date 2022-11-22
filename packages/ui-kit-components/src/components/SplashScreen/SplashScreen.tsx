import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import LogoBrand from '../Branding/LogoBrand/LogoBrand';
import LogoText from '../Branding/LogoText/LogoText';

export default function SplashScreen() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  //Using string because the hex isn't offered in both themes
  // const background = '#323232';
  //const color = theme.palette.common.white;

  const Container = styled.div(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    //backgroundColor: background,
    //color: color,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '30px',
  }));
  return (
    // <Box
    //   sx={{
    //     width: '100vw',
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'column',
    //     gap: '30px',
    //   }}
    // >
    <Container>
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
          //color: theme.palette.grey[300],
          fontWeight: '400',
          fontSize: { sm: '25px', xs: '20px' },
          fontFamily: `Merriweather, serif`,
        }}
      >
        Loading...
      </Typography>
    </Container>
    // </Box>
  );
}
