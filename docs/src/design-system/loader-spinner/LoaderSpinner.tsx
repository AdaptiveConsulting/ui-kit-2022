import {
  Grid,
  LinearProgress as MuiLinearProgress,
  Typography,
  useTheme,
} from '@mui/material';

import { TopBar } from '../building-blocks/common';

const LoaderSpinner: React.FC = () => {
  const { palette } = useTheme();

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
          <Grid item xs={6}>
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
            <Grid container item xs={6}>
              <Grid item xs={4}>
                <Typography>Loading bar before load begins</Typography>
              </Grid>
              <Grid item xs={8}>
                <Grid item xs={8}>
                  <MuiLinearProgress color="inherit" variant="determinate" value={2} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid container item xs={6}>
              <Grid item xs={4}>
                <Typography>Loading bar while loading</Typography>
              </Grid>
              <Grid item xs={8}>
                <Grid item xs={8}>
                  <MuiLinearProgress color="inherit" variant="determinate" value={50} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid container item xs={6}>
              <Grid item xs={4}>
                <Typography>Loading bar completed</Typography>
              </Grid>
              <Grid container item xs={8}>
                <Grid item xs={8}>
                  <MuiLinearProgress color="inherit" variant="determinate" value={100} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={6}>
          <Grid container item xs={6} sx={{ padding: '1rem 5rem 1rem 0rem' }}>
            <Grid item xs={12}>
              <Typography variant="h2">
                {palette.mode === 'light' ? 'Light Mode' : 'Dark Mode'}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ padding: '1rem 0rem' }}>
              <MuiLinearProgress color="inherit" variant="determinate" value={2} />
            </Grid>
            <Grid item xs={12} sx={{ padding: '1rem 0rem' }}>
              <MuiLinearProgress color="inherit" variant="determinate" value={50} />
            </Grid>
            <Grid item xs={12} sx={{ padding: '1rem 0rem' }}>
              <MuiLinearProgress color="inherit" variant="determinate" value={100} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoaderSpinner;
