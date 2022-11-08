import { Grid, useTheme } from '@mui/material';
import { BrandIcon } from '@ui-kit-2022/components';
import * as React from 'react';

import { TopBar } from '../building-blocks/common';
import { Color, IconLibrary, Purpose, Sizing, WithText } from '../building-blocks/icons';
const Icons: React.FC = () => {
  const { palette } = useTheme();

  return (
    <Grid container sx={{ width: '1005px' }}>
      <Grid item xs={12}>
        <TopBar icon={BrandIcon.LogoSmall} title={'Icons'} />
      </Grid>
      <Grid
        container
        sx={{
          bgcolor:
            palette.mode === 'dark' ? palette.background.paper : palette.common.white,
          color: palette.text.primary,
          padding: '1rem',
        }}
        rowGap={6}
      >
        <Purpose />
        <Sizing />
        <Color />
        <WithText />
        <IconLibrary />
      </Grid>
    </Grid>
  );
};

export default Icons;
