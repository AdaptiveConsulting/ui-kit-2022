import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Graph } from '@ui-kit-2022/components';
import * as React from 'react';

import Perlin from '../../utils/perlin';
const Stack: React.FC = () => {
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
      <Grid container sx={{ p: '0 1.5rem' }} spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4">Stack</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container  spacing={4}>
            <Grid item xs={12} lg={2}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="body2">From front to back:</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Graph line Baseline (dotted) X and Y axes Scale markers (X and Y)
                    Vertical alternating zebra stripes
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={10} xs={12} sx={{ p: match ? '0rem 2rem' : '0rem'}}>
              <Grid container>
                <Grid item xs={12} sm={10} lg={8}>
                  <Graph
                    yLabelStep={yLabelStep}
                    xLabelStep={60}
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

export default Stack;
