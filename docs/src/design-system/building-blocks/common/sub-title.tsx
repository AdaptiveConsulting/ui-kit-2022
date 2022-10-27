import { Grid, Typography } from '@mui/material';
import * as React from 'react';

const SubTitle = ({ subTitle }: { subTitle: string }) => {
  return (
    <Grid item xs={12}>
      <Typography variant={'h4'} sx={{ margin: '6px 0px' }}>
        {subTitle}
      </Typography>
    </Grid>
  );
};

export default SubTitle;
