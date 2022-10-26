import { Grid, List, ListItem, Typography } from '@mui/material';
import * as React from 'react';

import { SubTitle } from '../common';
const WithText = () => {
  return (
    <Grid item xs={12}>
      <Grid container columnGap={3}>
        <Grid item xs={2}>
          <SubTitle subTitle="With Text" />
          <Grid item xs={12}>
            <Typography variant="body2">
              Almost always use icons with accompanying text. When this is impossible,
              ensure an aria-label that can identify the icon on hover, and which is
              detectable by screen reader users.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              Create a harmonious relationship between the icon and its label with...
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <List
              sx={{
                listStyleType: 'disc',
                fontSize: '12px',
                ml: '1rem',
                padding: '0 0 ',
              }}
            >
              <ListItem sx={{ display: 'list-item', padding: '0 0' }}>
                Center vertical alignment between text and icon
              </ListItem>
              <ListItem sx={{ display: 'list-item', padding: '0 0' }}>
                Consistent pairing of label and icon across the experience
              </ListItem>
              <ListItem sx={{ display: 'list-item', padding: '0 0' }}>
                A match-or near-match in height between the text and the icon
              </ListItem>
              <ListItem sx={{ display: 'list-item', padding: '0 0' }}>
                Text and icon the same color. (This will usually mean that you will seek
                even higher contrast ratios to accomodate the text. That ratio should be
                4.5:1)
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WithText;
