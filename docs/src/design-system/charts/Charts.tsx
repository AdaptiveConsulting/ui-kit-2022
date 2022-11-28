import { Container, Toolbar, Typography, useTheme } from '@mui/material';
import { LogoBrand } from '@ui-kit-2022/components';
import * as React from 'react';

import Anatomy from './anatomy';
import MobileResponsiveness from './mobile-responsiveness';
import Purpose from './purpose';
import Stack from './stack';

const Charts: React.FC = () => {
  const { palette } = useTheme();
  return (
    <>
      <Toolbar
        sx={{
          backgroundColor: {
            dark: palette.grey['700'],
            light: palette.grey['200'],
          }[palette.mode],
        }}
      >
        <LogoBrand width={34} height={34} />
        <Typography variant="h4" ml={2}>
          Line Graph
        </Typography>
      </Toolbar>
      <Container disableGutters={true} maxWidth={false} sx={{ px: 5 }}>
        <Purpose />
        <Anatomy />
        <Stack />
        <MobileResponsiveness />
      </Container>
    </>
  );
};

export default Charts;
