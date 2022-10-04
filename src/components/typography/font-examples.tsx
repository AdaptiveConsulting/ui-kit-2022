import { Grid } from '@mui/material';
import * as React from 'react';

import FontExample from './font-example';

export default function FontExamples() {
  return (
    <Grid container sx={{ width: '800px', bgcolor: '#323232' }} columnGap={1}>
      <Grid item xs={1}>
        <p style={{ color: '#F2F2F2' }}>11px</p>
      </Grid>
      <Grid item xs={5}>
        <FontExample title={'Light Italic'} content={'Miscellaneous {ex: time stamps}'} />
      </Grid>
      <Grid item xs={5}>
        <FontExample title={'Medium'} content={'Chips'} />
      </Grid>
      <Grid item xs={1}>
        <p style={{ color: '#F2F2F2' }}>11px</p>
      </Grid>
      <Grid item xs={5}>
        <FontExample title={'Light Italic'} content={'Miscellaneous {ex: time stamps}'} />
      </Grid>
      <Grid item xs={5}>
        <FontExample title={'Medium'} content={'Chips'} />
      </Grid>
    </Grid>
  );
}
