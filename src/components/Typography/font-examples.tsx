import { Grid, Typography } from '@mui/material';
import * as React from 'react';

import FontExample from './font-example';

interface FontExamplesContainerProps {
  children: JSX.Element;
}

const FontExamplesContainer: React.FC<FontExamplesContainerProps> = ({ children }) => (
  <Grid
    container
    sx={{
      bgcolor: '#323232',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    }}
    rowGap={2}
  >
    {children}
  </Grid>
);

const MerriweatherExamples = () => (
  <>
    <Grid item xs={2}>
      <Typography style={{ color: '#F2F2F2', fontSize: '20px' }}>13px</Typography>
    </Grid>
    <Grid item xs={10}>
      <FontExample title={'Light Italic'} content={'Sidepanel text'} />
    </Grid>
    <Grid item xs={2}>
      <Typography style={{ color: '#F2F2F2', fontSize: '20px' }}>16px</Typography>
    </Grid>
    <Grid item xs={10}>
      <FontExample title={'Regular'} content={'Subitles'} />
    </Grid>
    <Grid item xs={2}>
      <Typography style={{ color: '#F2F2F2', fontSize: '20px' }}>32px</Typography>
    </Grid>
    <Grid item xs={10}>
      <FontExample title={'Regular'} content={'Titles'} />
    </Grid>
  </>
);

const RobotoExamples = () => (
  <>
    <Grid item lg={2} xs={2}>
      <p style={{ color: '#F2F2F2', fontSize: '20px' }}>11px</p>
    </Grid>
    <Grid item lg={3} xs={5}>
      <FontExample title={'Light Italic'} content={'Miscellaneous {ex: time stamps}'} />
    </Grid>
    <Grid item lg={7} xs={5}>
      <FontExample title={'Medium'} content={'Chips'} />
    </Grid>
    <Grid item lg={2} xs={2}>
      <p style={{ color: '#F2F2F2', fontSize: '20px' }}>12px</p>
    </Grid>
    <Grid item lg={3} xs={5}>
      <FontExample title={'Regular'} content={'Statistic values | table inputs'} />
    </Grid>
    <Grid item lg={7} xs={5}>
      <FontExample title={'Medium'} content={'Statistic titles'} />
    </Grid>
    <Grid item lg={2} xs={2}>
      <p style={{ color: '#F2F2F2', fontSize: '20px' }}>16px</p>
    </Grid>
    <Grid item lg={10} xs={10}>
      <FontExample title={'Regular'} content={'Dropdown results'} />
    </Grid>
  </>
);

interface FontExamples {
  fontName: 'roboto' | 'merriweather';
}

const FontExamples: React.FC<FontExamples> = ({ fontName }) => {
  return (
    <FontExamplesContainer>
      {fontName === 'roboto' ? <RobotoExamples /> : <MerriweatherExamples />}
    </FontExamplesContainer>
  );
};

export default FontExamples;
