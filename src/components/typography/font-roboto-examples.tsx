import { Grid } from '@mui/material';
import * as React from 'react';

import FontExample from './font-example';

export default function FontRobotoExamples() {
  return (
    <Grid container sx={{ width: '800px', bgcolor: '#323232' }} columnGap={1} rowGap={2}>
      <Grid item xs={1}>
        <p style={{ color: '#F2F2F2', fontSize: '20px' }}>11px</p>
      </Grid>
      <Grid item xs={5}>
        <FontExample title={'Light Italic'} content={'Miscellaneous {ex: time stamps}'} />
      </Grid>
      <Grid item xs={5}>
        <FontExample title={'Medium'} content={'Chips'} />
      </Grid>
      <Grid item xs={1}>
        <p style={{ color: '#F2F2F2', fontSize: '20px' }}>12px</p>
      </Grid>
      <Grid item xs={5}>
        <FontExample title={'Regular'} content={'Statistic values | table inputs'} />
      </Grid>
      <Grid item xs={5}>
        <FontExample title={'Medium'} content={'Statistic titles'} />
      </Grid>
      <Grid item xs={1}>
        <p style={{ color: '#F2F2F2', fontSize: '20px' }}>16px</p>
      </Grid>
      <Grid item xs={10}>
        <FontExample title={'Regular'} content={'Dropdown results'} />
      </Grid>
    </Grid>
  );
}
