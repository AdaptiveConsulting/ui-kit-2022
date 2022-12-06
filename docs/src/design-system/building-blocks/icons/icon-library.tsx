import { Grid, SvgIcon, SvgIconProps, Typography } from '@mui/material';
import * as React from 'react';

import { SubTitle } from '../common';
import { ICON_LIBRARY } from './icons.constants';

const Text: React.FC = () => {
  return (
    <Grid item>
      <SubTitle subTitle={ICON_LIBRARY.textTitle} />
      <Grid item xxs={12}>
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
            <Grid item xxs={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <value.icon sx={{ width: '12px', height: '12px' }} />
            </Grid>
            <Grid item xxs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
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
    <Grid item>
      <Grid container columnGap={{ xs: 0, sm: 2 }}>
        <RenderIcons column={ICON_LIBRARY.icons.columnOne} />
      </Grid>
    </Grid>
  );
};

const ColumnTwo: React.FC = () => {
  return (
    <Grid item>
      <Grid container columnGap={{ xs: 0, sm: 2 }}>
        <RenderIcons column={ICON_LIBRARY.icons.columnTwo} />
      </Grid>
    </Grid>
  );
};

const ColumnThree: React.FC = () => {
  return (
    <Grid item>
      <Grid container columnGap={{ xs: 0, sm: 2 }}>
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
    <Grid container columns={12} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
      <Grid item container xxs={5} sm={6} lg={3} columnGap={{ xs: 1, sm: 4, md: 1 }}>
        {icons.map((icon, index) => (
          <Grid
            key={index + icon.length}
            item
            xxs={2.2}
            sm={1.2}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <SvgIcon component={icon} sx={{ width: '16px', height: '16px' }} />
          </Grid>
        ))}
      </Grid>
      <Grid item xxs={6} sm={6} lg={9} sx={{ display: 'flex', alignItems: 'start' }}>
        <Typography variant="body2">{label}</Typography>
      </Grid>
    </Grid>
  );
};

const ColumnFour: React.FC = () => {
  return (
    <Grid item>
      <Grid container columnGap={{ xs: 0, sm: 4 }}>
        <RenderColumnFourIcons
          icons={ICON_LIBRARY.icons.columnFour[0].icons}
          label={ICON_LIBRARY.icons.columnFour[0].label}
        />
        <RenderColumnFourIcons
          icons={ICON_LIBRARY.icons.columnFour[1].icons}
          label={ICON_LIBRARY.icons.columnFour[1].label}
        />
        <RenderColumnFourIcons
          icons={ICON_LIBRARY.icons.columnFour[2].icons}
          label={ICON_LIBRARY.icons.columnFour[2].label}
        />
      </Grid>
    </Grid>
  );
};

const IconLibrary: React.FC = () => {
  return (
    <Grid container xxs={12} columnSpacing={0.5} rowGap={5}>
      <Grid item xxs={12} lg={3}>
        <Text />
      </Grid>
      <Grid
        item
        container
        xxs={12}
        lg={9}
        gap={{ xs: 0, sm: 2, md: 2 }}
        rowGap={{ xs: 4, sm: 0, md: 0 }}
      >
        <Grid item xxs={5} sm={2} lg={2}>
          <ColumnOne />
        </Grid>
        <Grid item xxs={5} sm={2} lg={2}>
          <ColumnTwo />
        </Grid>
        <Grid item xxs={5} sm={2} lg={2}>
          <ColumnThree />
        </Grid>
        <Grid item xxs={7} sm={3} lg={5}>
          <ColumnFour />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IconLibrary;
