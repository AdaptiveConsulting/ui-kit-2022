import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Graph } from '@ui-kit-2022/components';
import * as React from 'react';

import generateData from './generate-data';

const Stack: React.FC = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('lg'));

  const { data, labels, previousData } = generateData();
  const yLabelStep = Math.ceil((Math.max(...data[0]) - Math.min(...data[0])) / 2);
  return (
    <Grid item xs={12}>
      <Grid container sx={{ p: '0 1.5rem' }} spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4">Stack</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
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
            <Grid item lg={10} xs={12} sx={{ p: match ? '0rem 2rem' : '0rem' }}>
              <Grid container>
                <Grid item xs={10} sm={8} lg={6}>
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
