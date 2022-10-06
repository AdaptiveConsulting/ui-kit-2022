import { Grid } from '@mui/material';
import * as React from 'react';

import FontExample from './font-example';

const FontRobotoExamples: React.FunctionComponent = () => {
  return (
    <Grid container sx={{ bgcolor: '#323232' }} rowGap={2}>
      <Grid item lg={1} xs={2}>
        <p style={{ color: '#F2F2F2', fontSize: '20px' }}>11px</p>
      </Grid>
      <Grid item lg={4} xs={5}>
        <FontExample title={'Light Italic'} content={'Miscellaneous {ex: time stamps}'} />
      </Grid>
      <Grid item lg={7} xs={5}>
        <FontExample title={'Medium'} content={'Chips'} />
      </Grid>
      <Grid item lg={1} xs={2}>
        <p style={{ color: '#F2F2F2', fontSize: '20px' }}>12px</p>
      </Grid>
      <Grid item lg={4} xs={5}>
        <FontExample title={'Regular'} content={'Statistic values | table inputs'} />
      </Grid>
      <Grid item lg={7} xs={5}>
        <FontExample title={'Medium'} content={'Statistic titles'} />
      </Grid>
      <Grid item lg={1} xs={2}>
        <p style={{ color: '#F2F2F2', fontSize: '20px' }}>16px</p>
      </Grid>
      <Grid item lg={11} xs={10}>
        <FontExample title={'Regular'} content={'Dropdown results'} />
      </Grid>
    </Grid>
  );
};

export default FontRobotoExamples;
