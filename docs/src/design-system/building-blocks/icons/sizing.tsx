import { Box, Grid, Palette, Typography, useTheme } from '@mui/material';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

import { SubTitle } from '../common';
import { SIZING } from './icons.constants';
const CONTAINER_SIZE = { width: '100%', height: '100%' };

const ICON_SUBTITLE_STYLE = {
  width: '100%',
  height: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
};

const ICON_STYLE = {
  width: '100%',
  height: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'end',
};

const ICONS_GROUP_LAYOUT_STYLE = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

type SubtitleType = 'S' | 'M' | 'L' | 'XL' | 'Too big!' | 'Too small!';

const iconSizeStyle = (size: SubtitleType) => {
  switch (size) {
    case 'S':
      return {
        height: '9px',
        width: '9px',
      };
    case 'M':
      return {
        height: '12px',
        width: '12px',
      };
    case 'XL':
      return {
        height: '24px',
        width: '24px',
      };
    case 'L':
    case 'Too big!':
    case 'Too small!':
      return {
        height: '18px',
        width: '18px',
      };
  }
};

const componentSizeAndColor = (palette: Palette, size: SubtitleType) => {
  switch (size) {
    case 'L':
    case 'M':
    case 'S':
    case 'XL':
      return {
        size: 3,
      };
    case 'Too big!':
    case 'Too small!':
      return {
        size: 6,
        color: palette.error.main,
      };
  }
};

const ICON_SUBTITLE_FONT_STYLE = { fontSize: '11px', fontStyle: 'italic' };

const IconSubtitleComponent: React.FC<{ palette: Palette; children: SubtitleType }> = ({
  palette,
  children,
}) => {
  const { size, color } = componentSizeAndColor(palette, children);
  return (
    <Grid item xs={size}>
      <Box
        sx={{
          ...ICON_STYLE,
          color: color,
        }}
      >
        <Icon.AlarmBell sx={iconSizeStyle(children)} />
      </Box>
      <Box sx={ICON_SUBTITLE_STYLE}>
        <Typography
          sx={{
            ...ICON_SUBTITLE_FONT_STYLE,
            color: color,
          }}
        >
          {children}
        </Typography>
      </Box>
    </Grid>
  );
};

const Sizing = () => {
  const { palette } = useTheme();

  return (
    <Grid item xs={12}>
      <Grid container columnGap={3}>
        <Grid item xs={2}>
          <SubTitle subTitle="Sizing" />
          <Typography variant="body2">{SIZING.paragraph1}</Typography>
          <Typography variant="body2">{SIZING.paragraph2}</Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            {SIZING.paragraph3}
          </Typography>
        </Grid>
        <Grid item xs={1.5} sx={ICONS_GROUP_LAYOUT_STYLE}>
          <Grid container sx={CONTAINER_SIZE}>
            {SIZING.sizes.map((value) => (
              <IconSubtitleComponent key={value} palette={palette}>
                {value as SubtitleType}
              </IconSubtitleComponent>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={1.3} sx={ICONS_GROUP_LAYOUT_STYLE}>
          <Grid container sx={CONTAINER_SIZE}>
            {SIZING.errorSizes.map((value) => (
              <IconSubtitleComponent key={value} palette={palette}>
                {value as SubtitleType}
              </IconSubtitleComponent>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sizing;
