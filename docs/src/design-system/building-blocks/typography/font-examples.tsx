import { Grid, Typography } from '@mui/material';
import { ROBOTO } from '@ui-kit-2022/theme';
import * as React from 'react';

import FontExample from './font-example';
interface FontExamplesContainerProps {
  children: JSX.Element;
}

const FontExamplesContainer: React.FC<FontExamplesContainerProps> = ({ children }) => (
  <Grid
    container
    sx={{
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
    <Grid item xs={1.5}>
      <Typography sx={{ fontSize: '20px' }}>13px</Typography>
    </Grid>
    <Grid item xs={10.5}>
      <FontExample title={'Light Italic'} content={'Sidepanel text'} />
    </Grid>
    <Grid item xs={1.5}>
      <Typography sx={{ fontSize: '20px' }}>16px</Typography>
    </Grid>
    <Grid item xs={10.5}>
      <FontExample title={'Regular'} content={'Subitles'} />
    </Grid>
    <Grid item xs={1.5}>
      <Typography sx={{ fontSize: '20px' }}>32px</Typography>
    </Grid>
    <Grid item xs={10.5}>
      <FontExample title={'Regular'} content={'Titles'} />
    </Grid>
  </>
);

const RobotoExamples = () => (
  <>
    <Grid item lg={1.5} xs={2}>
      <Typography sx={{ fontSize: '20px' }}>11px</Typography>
    </Grid>
    <Grid item lg={3.5} xs={5}>
      <FontExample title={'Light Italic'} content={'Miscellaneous {ex: time stamps}'} />
    </Grid>
    <Grid item lg={7} xs={5}>
      <FontExample title={'Medium'} content={'Chips'} />
    </Grid>
    <Grid item lg={1.5} xs={2}>
      <Typography sx={{ fontSize: '20px' }}>12px</Typography>
    </Grid>
    <Grid item lg={3.5} xs={5}>
      <FontExample title={'Regular'} content={'Statistic values | table inputs'} />
    </Grid>
    <Grid item lg={7} xs={5}>
      <FontExample title={'Medium'} content={'Statistic titles'} />
    </Grid>
    <Grid item lg={1.5} xs={2}>
      <Typography sx={{ fontSize: '20px' }}>16px</Typography>
    </Grid>
    <Grid item lg={10.5} xs={10}>
      <FontExample title={'Regular'} content={'Dropdown results'} />
    </Grid>
  </>
);

interface FontExamples {
  fontName: 'Roboto' | 'Merriweather';
}

const FontExamples: React.FC<FontExamples> = ({ fontName }) => {
  return (
    <FontExamplesContainer>
      {fontName === ROBOTO ? <RobotoExamples /> : <MerriweatherExamples />}
    </FontExamplesContainer>
  );
};

export default FontExamples;
