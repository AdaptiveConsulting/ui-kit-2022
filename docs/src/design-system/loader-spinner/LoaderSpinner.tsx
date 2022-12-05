import {
  Box,
  Grid,
  LinearProgress as MuiLinearProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { TopBar } from '../building-blocks/common';

const LoaderSpinner: React.FC = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Grid container>
      <Grid item xs={12}>
        <TopBar title={'Loaders/Spinners'} />
      </Grid>
      <Grid container item xs={12} sx={{ padding: '1rem' }} spacing={6}>
        <Grid item xs={12}>
          <Typography variant="h2">Usage</Typography>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={12} md={8} lg={6} xl={4}>
            <Typography>
              Loading bars notify to the user that their request is being processed.
              Although they do not provide details about what is occurring on the
              back-end, they reassure the user that their action is being processed.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Examples</Typography>
        </Grid>
        <Grid container item xs={12} spacing={4}>
          <Grid container item xs={12}>
            <Grid container item xs={12} md={8} lg={6} spacing={4}>
              <Grid item sm={4} xs={12}>
                <Typography>Loading bar before load begins</Typography>
              </Grid>
              <Grid
                item
                sm={8}
                xs={12}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}
              >
                <Box sx={{ width: matchesSm ? '400px' : '280px' }}>
                  <MuiLinearProgress color="inherit" variant="determinate" value={2} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid container item xs={12} md={8} lg={6} spacing={4}>
              <Grid item sm={4} xs={12}>
                <Typography>Loading bar while loading</Typography>
              </Grid>
              <Grid
                item
                sm={8}
                xs={12}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}
              >
                <Box sx={{ width: matchesSm ? '400px' : '280px' }}>
                  <MuiLinearProgress color="inherit" variant="determinate" value={50} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid container item xs={12} md={8} lg={6} spacing={4}>
              <Grid item sm={4} xs={12}>
                <Typography>Loading bar completed</Typography>
              </Grid>
              <Grid
                item
                sm={8}
                xs={12}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}
              >
                <Box sx={{ width: matchesSm ? '400px' : '280px' }}>
                  <MuiLinearProgress color="inherit" variant="determinate" value={100} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} sx={{ padding: '1rem 5rem 1rem 0rem' }} spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h2">
              {theme.palette.mode === 'light' ? 'Light Mode' : 'Dark Mode'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: matchesSm ? '400px' : '280px' }}>
              <MuiLinearProgress color="inherit" variant="determinate" value={2} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: matchesSm ? '400px' : '280px' }}>
              <MuiLinearProgress color="inherit" variant="determinate" value={50} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: matchesSm ? '400px' : '280px' }}>
              <MuiLinearProgress color="inherit" variant="determinate" value={100} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoaderSpinner;
