import { Grid, List, ListItem, Typography } from '@mui/material';
import * as React from 'react';

import { SubTitle } from '../common';
const Purpose = () => {
  return (
    <>
      <SubTitle subTitle="Purpose" />
      <Grid item xs={12}>
        <Typography variant="body2">
          Icons are more than decoration. They draw attention and add clarity to areas and
          actions in our screen designs.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">Use them with purpose:</Typography>
        <List
          sx={{
            listStyleType: 'disc',
            // pl: 2,
            fontSize: '12px',
            ml: '1rem',
            padding: '0 0 ',
          }}
        >
          <ListItem sx={{ display: 'list-item', padding: '0 0' }}>
            They are a supplement, not a substitute, for onscreen language. Using an icon
            without a label to go with it should be rare.
          </ListItem>
          <ListItem sx={{ display: 'list-item', padding: '0 0' }}>
            Your choice to use an icon, and your choice of icon, should have a specific
            user or brand goal.
          </ListItem>
          <ListItem sx={{ display: 'list-item', padding: '0 0' }}>
            Consistent icon usage can create useful patterns that the user can learn.
          </ListItem>
        </List>
      </Grid>
    </>
  );
};

export default Purpose;
