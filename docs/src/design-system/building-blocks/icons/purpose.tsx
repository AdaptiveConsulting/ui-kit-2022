import { Grid, List, ListItem, Typography } from '@mui/material';
import * as React from 'react';

import { SubTitle } from '../common';
import { PURPOSE } from './icons.constants';
const Purpose: React.FC = () => {
  return (
    <Grid item container xxs={12} sm={9} md={12}>
      <SubTitle subTitle={PURPOSE.title} />
      <Grid item xxs={12}>
        <Typography variant="body2">{PURPOSE.paragraph1}</Typography>
      </Grid>
      <Grid item xxs={12}>
        <Typography variant="body2">{PURPOSE.paragraph2}</Typography>
        <List
          sx={{
            listStyleType: 'disc',
            fontSize: '12px',
            ml: '1rem',
            padding: '0 0 ',
          }}
        >
          {PURPOSE.textList.map((text) => (
            <ListItem key={text} sx={{ display: 'list-item', padding: '0 0' }}>
              {text}
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Purpose;
