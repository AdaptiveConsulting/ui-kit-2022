import { Grid, SvgIcon, SvgIconProps, Typography } from '@mui/material';
import * as React from 'react';

import { SubTitle } from '../common';
import { ICON_LIBRARY } from './icons.constants';

const Text: React.FC = () => {
  return (
    <Grid item xs={2}>
      <SubTitle subTitle={ICON_LIBRARY.textTitle} />
      <Grid item xs={12}>
        <Typography variant="body2">{ICON_LIBRARY.text}</Typography>
      </Grid>
    </Grid>
  );
};

interface IconExample {
  label: string;
  icon: React.FC<SvgIconProps>;
}

interface RenderIconsProps {
  column: Array<IconExample>;
}

const RenderIcons: React.FC<RenderIconsProps> = ({ column }) => {
  return (
    <>
      {column.map((value) => {
        return (
          <React.Fragment key={value.label}>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <value.icon sx={{ width: '12px', height: '12px' }} />
            </Grid>
            <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2">{value.label}</Typography>
            </Grid>
          </React.Fragment>
        );
      })}
    </>
  );
};

const ColumnOne: React.FC = () => {
  return (
    <Grid item xs={1.5}>
      <Grid container columnGap={1}>
        <RenderIcons column={ICON_LIBRARY.icons.columnOne} />
      </Grid>
    </Grid>
  );
};

const ColumnTwo: React.FC = () => {
  return (
    <Grid item xs={1.5}>
      <Grid container columnGap={1}>
        <RenderIcons column={ICON_LIBRARY.icons.columnTwo} />
      </Grid>
    </Grid>
  );
};

const ColumnThree: React.FC = () => {
  return (
    <Grid item xs={1.5}>
      <Grid container columnGap={1}>
        <RenderIcons column={ICON_LIBRARY.icons.columnThree} />
      </Grid>
    </Grid>
  );
};

interface RenderColumnFourIconsProps {
  label: string;
  icons: Array<React.FC<SvgIconProps>>;
}

const RenderColumnFourIcons: React.FC<RenderColumnFourIconsProps> = ({
  label,
  icons,
}) => {
  return (
    <>
      {icons.map((icon, index) => (
        <Grid
          key={index + icon.length}
          item
          xs={1.5}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <SvgIcon component={icon} sx={{ width: '16px', height: '16px' }} />
        </Grid>
      ))}
      <Grid item xs={3} sx={{ display: 'flex', alignItems: 'start' }}>
        <Typography variant="body2">{label}</Typography>
      </Grid>
    </>
  );
};

const ColumnFour: React.FC = () => {
  return (
    <Grid item xs={1.5}>
      <Grid container columnGap={1}>
        <RenderColumnFourIcons
          icons={ICON_LIBRARY.icons.columnFour[0].icons}
          label={ICON_LIBRARY.icons.columnFour[0].label}
        />
        <RenderColumnFourIcons
          icons={ICON_LIBRARY.icons.columnFour[1].icons}
          label={ICON_LIBRARY.icons.columnFour[1].label}
        />
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
