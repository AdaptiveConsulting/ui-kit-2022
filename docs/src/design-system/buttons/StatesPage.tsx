import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Typography } from '@ui-kit-2022/components';
import { dark, light } from '@ui-kit-2022/theme';

import ButtonStatesExample from '../building-blocks/button/ButtonStatesExample';
import TopBar from '../building-blocks/common/top-bar';

const StatesPage = () => {
  const theme = useTheme();

  return (
    <>
      <Box>
        <TopBar title={'STATES'} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Box
          sx={{
            width: '900px',
            paddingLeft: '1.25rem',
            paddingTop: '1.875rem',
            paddingBottom: '3.5rem',
          }}
        >
          {/* primary-any background */}
          <Box sx={{ marginBottom: '2.5rem' }}>
            <Grid
              container
              columnSpacing={'40px'}
              rowSpacing={{ xs: 6, sm: 2 }}
              sx={{
                [theme.breakpoints.down('md')]: { maxWidth: '600px', margin: '0 auto' },
              }}
            >
              {useMediaQuery(theme.breakpoints.up('md')) ? (
                <>
                  <Grid item xs={0} md={1}></Grid>
                  <Grid item xs={0} md={1}></Grid>
                </>
              ) : null}
              <Grid item md={8}>
                <Typography variant="subheader1">Primary - any background</Typography>
              </Grid>
            </Grid>
            <ButtonStatesExample variantType="PRIMARY" />
          </Box>
          {/* secondary-on light background */}
          <Box sx={{ marginBottom: '2.5rem' }}>
            <Grid
              container
              columnSpacing={'40px'}
              rowSpacing={{ xs: 6, sm: 2 }}
              sx={{
                [theme.breakpoints.down('md')]: { maxWidth: '600px', margin: '0 auto' },
              }}
            >
              {useMediaQuery(theme.breakpoints.up('md')) ? (
                <>
                  <Grid item xs={0} md={1}></Grid>
                  <Grid item xs={0} md={1}></Grid>
                </>
              ) : null}
              <Grid item md={8}>
                <Typography variant="subheader1">
                  Secondary - On light background
                </Typography>
              </Grid>
            </Grid>
            <ButtonStatesExample variantType="SECONDARY" overrideTheme={light} />
          </Box>

          {/* secondary-on dark background */}
          <Box sx={{ marginBottom: '2.5rem' }}>
            <Grid
              container
              columnSpacing={'40px'}
              rowSpacing={{ xs: 6, sm: 2 }}
              sx={{
                [theme.breakpoints.down('md')]: { maxWidth: '600px', margin: '0 auto' },
              }}
            >
              {useMediaQuery(theme.breakpoints.up('md')) ? (
                <>
                  <Grid item xs={0} md={1}></Grid>
                  <Grid item xs={0} md={1}></Grid>
                </>
              ) : null}
              <Grid item md={8}>
                <Typography variant="subheader1">
                  Secondary - On dark background
                </Typography>
              </Grid>
            </Grid>
            <ButtonStatesExample variantType="SECONDARY" overrideTheme={dark} />
          </Box>
          {/* tertiary-on light background */}
          <Box sx={{ marginBottom: '2.5rem' }}>
            <Grid
              container
              columnSpacing={'40px'}
              rowSpacing={{ xs: 6, sm: 2 }}
              sx={{
                [theme.breakpoints.down('md')]: { maxWidth: '600px', margin: '0 auto' },
              }}
            >
              {useMediaQuery(theme.breakpoints.up('md')) ? (
                <>
                  <Grid item xs={0} md={1}></Grid>
                  <Grid item xs={0} md={1}></Grid>
                </>
              ) : null}
              <Grid item md={8}>
                <Typography variant="subheader1">
                  Tertiary - On light background
                </Typography>
              </Grid>
            </Grid>
            <ButtonStatesExample variantType="TERTIARY" overrideTheme={light} />
          </Box>
          {/* tertiary-on dark background */}
          <Box>
            <Grid
              container
              columnSpacing={'40px'}
              rowSpacing={{ xs: 6, sm: 2 }}
              sx={{
                [theme.breakpoints.down('md')]: { maxWidth: '600px', margin: '0 auto' },
              }}
            >
              {useMediaQuery(theme.breakpoints.up('md')) ? (
                <>
                  <Grid item xs={0} md={1}></Grid>
                  <Grid item xs={0} md={1}></Grid>
                </>
              ) : null}
              <Grid item md={8}>
                <Typography variant="subheader1">
                  Tertiary - On dark background
                </Typography>
              </Grid>
            </Grid>
            <ButtonStatesExample variantType="TERTIARY" overrideTheme={dark} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default StatesPage;
