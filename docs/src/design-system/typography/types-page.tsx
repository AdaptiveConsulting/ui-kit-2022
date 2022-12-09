import { Divider, Grid, Typography, useTheme } from '@mui/material';
import { MERRIWEATHER, ROBOTO } from '@ui-kit-2022/theme';
import * as React from 'react';

import TopBar from '../building-blocks/common/top-bar';
import { FontExamples, TextSample, TypeCard } from '../building-blocks/typography';

const TYPE_CARD_REGULAR_PROPS = {
  title: 'REGULAR',
  letter: 'Aa',
  fontFamily: ROBOTO,
  fontWeight: '400',
  fontStyle: 'normal',
};

const TYPE_CARD_MEDIUM_PROPS = {
  ...TYPE_CARD_REGULAR_PROPS,
  title: 'MEDIUM',
  fontWeight: '500',
};

const TYPE_CARD_LIGHT_ITALIC_PROPS = {
  ...TYPE_CARD_REGULAR_PROPS,
  title: 'LIGHT ITALIC',
  fontWeight: '300',
  fontStyle: 'italic',
};

const TYPE_CARD_REGULAR_MERRIWEATHER_PROPS = {
  ...TYPE_CARD_REGULAR_PROPS,
  fontFamily: MERRIWEATHER,
};

const TypesPage: React.FC = () => {
  const { palette } = useTheme();
  const theme = useTheme();

  return (
    <>
      <TopBar title={'TYPES'} />
      <Grid
        container
        sx={{
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '2rem',
          paddingBottom: '5rem',
          [theme.breakpoints.down('sm')]: { flexDirection: 'column' },
        }}
        rowGap={1}
      >
        <Grid item xxs={12} md={5} sx={{ textWrap: 'wrap' }}>
          <TextSample fontName={ROBOTO} />
        </Grid>
        <Grid item xxs={12} sm={4} md={2}>
          <TypeCard {...TYPE_CARD_REGULAR_PROPS} />
        </Grid>
        <Grid item xxs={12} sm={4} md={2}>
          <TypeCard {...TYPE_CARD_MEDIUM_PROPS} />
        </Grid>
        <Grid item xxs={12} sm={4} md={2}>
          <TypeCard {...TYPE_CARD_LIGHT_ITALIC_PROPS} />
        </Grid>
        <Grid item xxs={12} md={12}>
          <Typography>Examples</Typography>
        </Grid>
        <Grid item xxs={12}>
          <FontExamples fontName={ROBOTO} />
        </Grid>
      </Grid>
      <Grid item xxs={12}>
        <Divider color={palette.common.white} variant="middle" />
      </Grid>
      <Grid
        container
        sx={{
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '2rem',
          paddingBottom: '3rem',
        }}
        rowGap={1}
        columnGap={4}
      >
        <Grid item xxs={12} md={5}>
          <TextSample fontName={MERRIWEATHER} />
        </Grid>
        <Grid item xxs={12} sm={4} md={2}>
          <TypeCard {...TYPE_CARD_REGULAR_MERRIWEATHER_PROPS} />
        </Grid>
        <Grid container item direction="column">
          <Grid item xxs={12}>
            <Typography>Examples</Typography>
          </Grid>
          <Grid item xxs={12}>
            <FontExamples fontName={MERRIWEATHER} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TypesPage;
