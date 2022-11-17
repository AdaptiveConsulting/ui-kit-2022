import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { Logo, Typography } from '@ui-kit-2022/components';

import { TopBar } from '../building-blocks/common';
const BrandDocPage = () => {
  const theme = useTheme();
  const typographyStyling = {
    textTransform: 'none',
    [theme.breakpoints.up('sm')]: {
      pr: '3rem',
    },
  };

  return (
    <>
      <TopBar title={'BRAND'} />
      <Grid container columns={3} sx={{ p: '3rem 2rem' }} rowGap={5}>
        {useMediaQuery(theme.breakpoints.up('md')) ? (
          <Grid item container columns={5}>
            <Grid item xs={1} md={1}>
              <Typography variant="h1">SIZE</Typography>
            </Grid>
            <Grid item xs={1} sm={3}>
              <Typography variant="h1">USAGE</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h1">EXAMPLE</Typography>
            </Grid>
          </Grid>
        ) : null}
        <Grid item container columns={{ xs: 1, sm: 3, md: 5 }} rowGap={3}>
          <Grid item xs={3} md={1}>
            <Typography variant="h2">Maximized</Typography>
          </Grid>
          <Grid item xs={2} md={3}>
            <Typography variant="h2" sx={{ ...typographyStyling }}>
              Used in mobile experience in splash screens and loading pages. Also used
              throughout desktop screen in lefthand banner.
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Logo variant="maximized" />
          </Grid>
        </Grid>
        <Grid item container columns={{ xs: 1, sm: 3, md: 5 }} rowGap={3}>
          <Grid item xs={3} md={1}>
            <Typography variant="h2">Large</Typography>
          </Grid>
          <Grid item xs={2} md={3}>
            <Typography variant="h2" sx={{ ...typographyStyling }}>
              Used in splash screen and loading pages.
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Logo variant="large" />
          </Grid>
        </Grid>
        <Grid item container columns={{ xs: 1, sm: 3, md: 5 }} rowGap={3}>
          <Grid item xs={3} md={1}>
            <Typography variant="h2">Small</Typography>
          </Grid>
          <Grid item xs={2} md={3}>
            <Typography variant="h2" sx={{ ...typographyStyling }}>
              Not shown in the current experience, but will be used when an entire screen
              is used and the logo shows in the navigation.
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Logo variant="small" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default BrandDocPage;
