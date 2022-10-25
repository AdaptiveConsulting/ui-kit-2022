import '@fontsource/merriweather/400.css';

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
  const background = '#323232';
  const color = theme.palette.common.white;

  const Container = styled.div(() => ({
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
        width={windowWidth > 512 ? undefined : 104}
        height={windowWidth > 512 ? undefined : 103}
      />
      <LogoText
        width={windowWidth > 512 ? undefined : 169}
        height={windowWidth > 512 ? undefined : 56}
      />
      <Typography
        sx={{
          color: theme.palette.grey[300],
          fontWeight: '400',
          fontSize: windowWidth >= 512 ? '25px' : '20px',
          fontFamily: `Merriweather, serif`,
        }}
      >
        Loading...
      </Typography>
    </Container>
  );
}
