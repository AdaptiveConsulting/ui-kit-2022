import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import { Graph } from '@ui-kit-2022/components';
import Perlin from '../../utils/perlin';

const MobileResponsiveness: React.FC = () => {
  const labels = Array(24 * 60)
    .fill(0)
    .map((_, i) => {
      return ('0' + ~~(i / 60) + ': 0' + Math.round(60 * ((i / 60) % 1))).replace(
        /\d(\d\d)/g,
        '$1',
      );
    })
    .filter((time) => {
      const [hour, minute] = time.split(':');
      return ['09', '10', '11', '12', '13', '14', '15'].includes(hour);
    });

  const perlin = new Perlin();
  let y = 0.004;

  const data = [
    labels.map((_) => {
      y += 0.008;
      return perlin.get(1, y) * 300 + 300;
    }),
  ];
  const previousData = Math.ceil((Math.max(...data[0]) + Math.min(...data[0])) / 2);
  const yLabelStep = Math.ceil((Math.max(...data[0]) - Math.min(...data[0])) / 2);
  const yLabelStepM = Math.ceil((Math.max(...data[0]) - Math.min(...data[0])) / 4);
  const yLabelStepLarge = Math.ceil((Math.max(...data[0]) - Math.min(...data[0])) / 6);

  return (
    <Grid item xs={12}>
      <Grid container sx={{ p: '0 1.5rem' }} spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4">Mobile Responsiveness</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={2}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    The graph should scale to fit the width provided and allow the user to
                    see the day’s action without swiping. On smaller viewports, this means
                    reducing the number of stripes and scale labels for a less noisy
                    design.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Example sizes:</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="body2">Small:</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      4 and 1/3 vertical stripes 3 labeled Y-axis markers spaced 32px
                      apart verticalluy
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="body2">M:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        8 and 2/3 vertical stripes 6 Y-axis markers, alternating labeled
                        and unlabeled, spaced 32 px apart vertically.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
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
              </Grid>
            </Grid>
            <Grid item xs={10} sx={{ p: '0 2rem' }}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Graph
                        labels={labels}
                        data={data}
                        yLabelStep={yLabelStep}
                        xLabelStep={90}
                        previousData={previousData}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={8}>
                      <Graph
                        labels={labels}
                        data={data}
                        yLabelStep={yLabelStepM}
                        xLabelStep={45}
                        previousData={previousData}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={10}>
                      <Graph
                        labels={labels}
                        data={data}
                        yLabelStep={yLabelStepLarge}
                        xLabelStep={30}
                        previousData={previousData}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileResponsiveness;
