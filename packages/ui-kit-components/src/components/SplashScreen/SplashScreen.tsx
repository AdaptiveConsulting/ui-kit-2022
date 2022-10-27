import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';

import LogoBrand from '../Branding/LogoBrand/LogoBrand';
import LogoText from '../Branding/LogoText/LogoText';

export default function SplashScreen() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWindowWidth]);

  const theme = useTheme();
  //Using string because the hex isn't offered in both themes
  const background = '#323232';
  const color = theme.palette.common.white;

  const Container = styled.div(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: background,
    color: color,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '30px',
  }));

  return (
    <Container>
      <LogoBrand
        width={windowWidth >= 600 ? undefined : 104}
        height={windowWidth >= 600 ? undefined : 103}
      />
      <LogoText
        width={windowWidth >= 600 ? undefined : 169}
        height={windowWidth >= 600 ? undefined : 56}
      />
      <Typography
        sx={{
          color: theme.palette.grey[300],
          fontWeight: '400',
          fontSize: { sm: '25px', xs: '20px' },
          fontFamily: `Merriweather, serif`,
        }}
      >
        Loading...
      </Typography>
    </Container>
  );
}
