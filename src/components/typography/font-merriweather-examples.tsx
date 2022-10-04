import { Grid } from '@mui/material';
import * as React from 'react';

import FontExample from './font-example';

export default function FontMerriweatherExamples() {
  return (
    <Grid container sx={{ width: '800px', bgcolor: '#323232' }} columnGap={1} rowGap={2}>
      <Grid item xs={1}>
        <p style={{ color: '#F2F2F2', fontSize: '20px' }}>13px</p>
      </Grid>
      <Grid item xs={10}>
        <FontExample title={'Light Italic'} content={'Sidepanel text'} />
      </Grid>
      <Grid item xs={1}>
        <p style={{ color: '#F2F2F2', fontSize: '20px' }}>16px</p>
      </Grid>
      <Grid item xs={10}>
        <FontExample title={'Regular'} content={'Subitles'} />
      </Grid>
      <Grid item xs={1}>
        <p style={{ color: '#F2F2F2', fontSize: '20px' }}>32px</p>
      </Grid>
      <Grid item xs={10}>
        <FontExample title={'Regular'} content={'Titles'} />
      </Grid>
    </Grid>
  );
}
