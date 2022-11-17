import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Graph } from '@ui-kit-2022/components';
import * as React from 'react';

import Perlin from '../../utils/perlin';
const Anatomy: React.FC = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('lg'))

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

  const previousData = Math.random() * 100 + 250;
  const yLabelStep = Math.ceil((Math.max(...data[0]) - Math.min(...data[0])) / 2);

  return (
    <Grid item xs={12}>
      <Grid container sx={{ p: '0 1.5rem', width: '100%' }} spacing={4} >
        <Grid item xs={12}>
          <Typography variant="h4">Anatomy</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item md={12} lg={2}>
              <Grid container spacing={4}>
                <Grid item>
                  <Typography variant="body2">
                    The graph is bounded on its left and bottom by y and x axes. The
                    leftmost X marker is left aligned.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    Markers are provided for scale on each axis, though not every marker
                    needs to have a value label.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    The rightmost is right-aligned. Others are center-aligned.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    The security’s price at market open is shown by a dotted baseline,
                    while the bolder solid line shows how the price travels intraday.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    Subtly transulcent zebra striping in alternate columns gives the user
                    a sense of horizontal rhythm for the timeline.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={10} xs={12} sx={{ p: match ? '0rem 2rem' : '0rem'}}>
              <Grid container>
                <Grid item xs={12} sm={8} lg={6}>
                  <Graph
                    yLabelStep={yLabelStep}
                    xLabelStep={90}
                    labels={labels}
                    data={data}
                    previousData={previousData}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Anatomy;
