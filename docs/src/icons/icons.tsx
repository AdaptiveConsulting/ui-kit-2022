import { Grid, useTheme } from '@mui/material';
import { BrandIcon } from '@ui-kit-2022/components';
import * as React from 'react';

import { TopBar } from '../common';
import Purpose from './purpose';
import Sizing from './sizing';
const Icons = () => {
  const { palette } = useTheme();

  return (
    <Grid container sx={{ width: '1005px' }}>
      <Grid item xs={12}>
        <TopBar icon={BrandIcon.LogoSmall} title={'Icons'} />
      </Grid>
      <Grid
        container
        sx={{
          bgcolor: palette.mode === 'dark' ? palette.background.paper : palette.logo,
          color: palette.common.white,
          padding: '1rem',
        }}
        rowGap={5}
      >
        <Purpose />
        <Sizing />
      </Grid>
    </Grid>
  );
};

export default Icons;
