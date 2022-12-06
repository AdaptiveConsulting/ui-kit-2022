import { Grid, useTheme } from '@mui/material';
import * as React from 'react';

import { TopBar } from '../building-blocks/common';
import { Color, IconLibrary, Purpose, Sizing, WithText } from '../building-blocks/icons';
const Icons: React.FC = () => {
  const { palette } = useTheme();

  return (
    <>
      <TopBar title={'Icons'} />
      <Grid
        container
        sx={{
          bgcolor:
            palette.mode === 'dark' ? palette.background.paper : palette.common.white,
          color: palette.text.primary,
          padding: '1rem',
        }}
        rowGap={7}
      >
        <Purpose />
        <Sizing />
        <Color />
        <WithText />
        <IconLibrary />
      </Grid>
    </>
  );
};

export default Icons;
