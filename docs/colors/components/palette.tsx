import { Box, Grid, SvgIcon, Typography } from '@mui/material';
import * as React from 'react';

import { SmallLightLogo } from '../../../src/icons';
import TopBar from '../../common/top-bar';

const title = (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <SvgIcon
      component={SmallLightLogo}
      viewBox="0 0 35 35"
      sx={{ width: '34px', height: '34px' }}
    />
    <Typography sx={{ color: '#FFFFFF', marginLeft: '1rem', fontSize: '16px' }}>
      Reactive Design System
    </Typography>
  </Box>
);

const Palette: React.FC = () => {
  return (
    <Grid>
      <TopBar title={title} />
    </Grid>
  );
};

export default Palette;
