import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

import AppBar from './components/AppBar';

export default function Stocks() {
  const theme = useTheme();

  const Container = styled.div`
    display: flex;
    height: 100vh;
    ${useMediaQuery(theme.breakpoints.down('lg')) ? 'flex-direction: column' : null}
  `;

  return (
    <Container>
      <AppBar />
      Stocks
    </Container>
  );
}
