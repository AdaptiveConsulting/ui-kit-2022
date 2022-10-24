import { Box, Grid, Typography, useTheme } from '@mui/material';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

import { SubTitle } from '../common';
const Sizing = () => {
  const { palette } = useTheme();

  return (
    <Grid item xs={12}>
      <Grid container columnGap={3}>
        <Grid item xs={3}>
          <SubTitle subTitle="Sizing" />
          <Typography variant="body2">
            Use icons in approved sizes with enough space around them.
          </Typography>
          <Typography variant="body2">
            They are sized to take up the central 75% of a square, transparent frame whose
            pixel dimensions are one of our approved sizing increments of S, M, L or XL. =
          </Typography>
          <Typography variant="body2">The use of S and XL icons will be rare.</Typography>
        </Grid>
        <Grid
          item
          xs={1.5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid container sx={{ width: '100%', height: '100%' }}>
            <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box
                sx={{
                  width: '100%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'end',
                }}
              >
                <Icon.AlarmBell
                  sx={{
                    height: '9px',
                    width: '9px',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'start',
                }}
              >
                <Typography sx={{ fontSize: '11px', fontStyle: 'italic' }}>S</Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  width: '100%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'end',
                }}
              >
                <Icon.AlarmBell
                  sx={{
                    height: '12px',
                    width: '12px',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'start',
                }}
              >
                <Typography sx={{ fontSize: '11px', fontStyle: 'italic' }}>M</Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  width: '100%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'end',
                }}
              >
                <Icon.AlarmBell
                  sx={{
                    height: '18px',
                    width: '18px',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'start',
                }}
              >
                <Typography sx={{ fontSize: '11px', fontStyle: 'italic' }}>L</Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  width: '100%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'end',
                }}
              >
                <Icon.AlarmBell
                  sx={{
                    height: '24px',
                    width: '24px',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'start',
                }}
              >
                <Typography sx={{ fontSize: '11px', fontStyle: 'italic' }}>XL</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={1.2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid container sx={{ width: '100%', height: '100%' }}>
            <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box
                sx={{
                  width: '100%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'end',
                  color: palette.error.main,
                }}
              >
                <Icon.AlarmBell
                  sx={{
                    height: '18px',
                    width: '18px',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'start',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '11px',
                    color: palette.error.main,
                    fontStyle: 'italic',
                  }}
                >
                  Too small!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box
                sx={{
                  width: '100%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'end',
                  color: palette.error.main,
                }}
              >
                <Icon.AlarmBell
                  sx={{
                    height: '18px',
                    width: '18px',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'start',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '11px',
                    color: palette.error.main,
                    fontStyle: 'italic',
                  }}
                >
                  Too big!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sizing;
