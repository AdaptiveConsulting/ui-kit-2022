import * as React from 'react';
import {Grid, Typography} from "@mui/material"

const Purpose: React.FC = () => {
  return       <Grid item xs={12}>
  <Grid container sx={{ p: '0 1.5rem' }} spacing={4}>
    <Grid item xs={12}>
      <Typography variant="h4">Purpose</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body2">
        This line graph draws attention to the searched security and its key data
        points. It is the key visual “Analytics” representation in “Reactive
        Analytics
      </Typography>
    </Grid>
  </Grid>
</Grid>
}

export default Purpose;