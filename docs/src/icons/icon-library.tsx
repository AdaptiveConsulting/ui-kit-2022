import { Grid, Typography } from '@mui/material';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

import { SubTitle } from '../common';

const Text: React.FC = () => {
  return (
    <Grid item xs={2}>
      <SubTitle subTitle="Icon library" />
      <Grid item xs={12}>
        <Typography variant="body2">
          These are the vectors on which the icon component is based.
        </Typography>
      </Grid>
    </Grid>
  );
};

const ColumnOne: React.FC = () => {
  return (
    <Grid item xs={1.5}>
      <Grid container columnGap={1.5}>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Refresh sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">refresh</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Edit sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">edit</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Trash sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">trash</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Notification sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">notification</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.ThumbDown sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">thumb-down</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Stop sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">stop</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Check sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">check</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Ban sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">ban</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Timer sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">timer</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Close sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">close</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ColumnTwo: React.FC = () => {
  return (
    <Grid item xs={1.5}>
      <Grid container columnGap={1.5}>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Calendar sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">calendar</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Groups sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">groups</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.More sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">more</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Eye sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">eye</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Search sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">search</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Filter sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">filter</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Settings sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">settings</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Cog sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">cog</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Plus sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">plus</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Lock sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">lock</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ColumnThree: React.FC = () => {
  return (
    <Grid item xs={1.5}>
      <Grid container columnGap={1.5}>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Download sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">download</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Upload sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">upload</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.AlarmBell sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">alarm-bell</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.Info sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">info</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ColumnFour: React.FC = () => {
  return (
    <Grid item xs={1.5}>
      <Grid container columnGap={1}>
        <Grid item xs={1.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.ArrowUp sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={1.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.ArrowDown sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={1.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.ArrowLeft sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={1.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.ArrowRight sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">arrow</Typography>
        </Grid>
        <Grid item xs={1.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.ChevronUp sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={1.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.ChevronDown sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={1.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.ChevronLeft sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={1.5} sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon.ChevronRight sx={{ width: '12px', height: '12px' }} />
        </Grid>
        <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">chevron</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const IconLibrary: React.FC = () => {
  return (
    <Grid item xs={12}>
      <Grid container columnGap={3}>
        <Text />
        <ColumnOne />
        <ColumnTwo />
        <ColumnThree />
        <ColumnFour />
      </Grid>
    </Grid>
  );
};

export default IconLibrary;
