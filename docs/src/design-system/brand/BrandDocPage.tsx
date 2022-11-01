import { Grid } from '@mui/material';
import { Typography } from '@ui-kit-2022/components';
import { Logo } from '@ui-kit-2022/components';

import { TopBar } from '../building-blocks/common';
const BrandDocPage = () => {
  return (
    <>
      <TopBar title={'BRAND'} />
      <Grid container sx={{ p: '3rem 2rem' }} spacing={6}>
        <Grid item xs={2}>
          <Typography variant="h1">SIZE</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h1">USAGE</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h1">EXAMPLE</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h2">Maximized</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h2" sx={{ textTransform: 'none', pr: '3rem' }}>
            Used in mobile experience in splash screens and loading pages. Also used
            throughout desktop screen in lefthand banner.
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Logo variant="maximized" />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h2">Large</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h2" sx={{ textTransform: 'none', pr: '3rem' }}>
            Used in splash screen and loading pages.
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Logo variant="large" />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h2">Small</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h2" sx={{ textTransform: 'none', pr: '3rem' }}>
            Not shown in the current experience, but will be used when an entire screen is
            used and the logo shows in the navigation.
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Logo variant="small" />
        </Grid>
      </Grid>
    </>
  );
};
export default BrandDocPage;
