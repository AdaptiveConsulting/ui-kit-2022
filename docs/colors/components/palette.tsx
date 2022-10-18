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
      <Grid item xs={12}>
        <TopBar title={title} />
      </Grid>
      <Grid container sx={{ bgcolor: '#323232', color: '#FFFFFF', padding: '1rem' }}>
        <Grid item xs={12}>
          <Typography sx={{ margin: '6px 0px' }}>Purpose</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ width: '50%', margin: '6px 0px' }}>
            Colors communicate branding. When applied consistently , they can communicate
            information about system states, and draw attention to certain parts of the
            screen, like an error that needs attention.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ width: '50%', margin: '6px 0px' }}>
            Though color does much to make a design more efficient and effective, we must
            still pursue designs that are effective even to those with little or no color
            perception. Therefore, colors should be used in an accessible manner, and no
            information should be communicated by color alone.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Palette;
