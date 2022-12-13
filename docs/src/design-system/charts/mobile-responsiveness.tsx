import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Graph } from '@ui-kit-2022/components';
import * as React from 'react';

import generateData from './generate-data';
const MobileResponsiveness: React.FC = () => {
  const theme = useTheme();
  const matchLg = useMediaQuery(theme.breakpoints.up('lg'));
  const matchSm = useMediaQuery(theme.breakpoints.up('sm'));

  const { data, labels, previousData, currentData, isUp } = generateData();
  const yLabelStep = Math.ceil((Math.max(...data[0]) - Math.min(...data[0])) / 2);
  const yLabelStepM = Math.ceil((Math.max(...data[0]) - Math.min(...data[0])) / 4);
  const yLabelStepL = Math.ceil((Math.max(...data[0]) - Math.min(...data[0])) / 6);

  return (
    <>
      <Typography variant="h4" my={4}>
        Mobile Responsiveness
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={12} lg={2} container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="body2">
              The graph should scale to fit the width provided and allow the user to see
              the day’s action without swiping. On smaller viewports, this means reducing
              the number of stripes and scale labels for a less noisy design.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Example sizes:</Typography>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Typography variant="body2">Small:</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              4 and 1/3 vertical stripes 3 labeled Y-axis markers spaced 32px apart
              vertically
            </Typography>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Typography variant="body2">M:</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                8 and 2/3 vertical stripes 6 Y-axis markers, alternating labeled and
                unlabeled, spaced 32 px apart vertically.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Typography variant="body2">L:</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                13 vertical stripes 8 labeled y-axis markers
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={10}
          xs={12}
          sx={{ p: matchLg ? '0rem 2rem' : '0rem' }}
          container
          spacing={6}
        >
          <Grid item xs={12} container>
            <Grid item xs={8} sm={6} lg={4}>
              <Graph
                labels={labels}
                data={data}
                yLabelStep={yLabelStep}
                xLabelStep={90}
                previousData={previousData}
                currentData={currentData}
                isUp={isUp}
              />
            </Grid>
          </Grid>
          {matchSm && (
            <Grid item xs={12} container>
              <Grid item xs={10} sm={8} lg={6}>
                <Graph
                  labels={labels}
                  data={data}
                  yLabelStep={yLabelStepM}
                  xLabelStep={60}
                  previousData={previousData}
                  currentData={currentData}
                  isUp={isUp}
                />
              </Grid>
            </Grid>
          )}
          {matchLg && (
            <Grid item xs={12} container>
              <Grid item xs={12} sm={10} lg={8}>
                <Graph
                  labels={labels}
                  data={data}
                  yLabelStep={yLabelStepL}
                  xLabelStep={30}
                  previousData={previousData}
                  currentData={currentData}
                  isUp={isUp}
                />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default MobileResponsiveness;
