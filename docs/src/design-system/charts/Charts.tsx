import * as React from 'react';
import { Toolbar, useTheme, Typography, Grid } from '@mui/material';
import { Icon, LogoBrand, Pill, Graph } from '@ui-kit-2022/components';

import Purpose from './purpose';
import Anatomy from './anatomy';
import Stack from './stack';
import MobileResponsiveness from './mobile-responsiveness';

const Charts: React.FC = () => {
  const { palette } = useTheme();
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
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
      </Grid>
      <Purpose />
      <Anatomy />
      <Stack/>
      <MobileResponsiveness />
    </Grid>
  );
};

export default Charts;
