import { Box, Grid, Palette, Typography, useTheme } from '@mui/material';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

import { SubTitle } from '../common';
import { COLOR } from './icons.constants';
type BackgroundType = 'dark' | 'light';

const ICON_WITH_LABEL_STYLE = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const LABEL_STYLE = {
  fontSize: '11px',
  fontWeight: '300',
  fontStyle: 'italic',
};

const IconsGroup: React.FC<{
  children: string;
  background: BackgroundType;
  palette: Palette;
}> = ({ children, background, palette }) => {
  const FONT_COLOR = background === 'dark' ? palette.grey[50] : palette.grey[900];

  return (
    <Grid
      container
      rowGap={2}
      sx={{ height: '100%', witdh: '100%', fontSize: '11px', fontWeight: '300' }}
    >
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'start',
            padding: '1rem 0rem',
            bgcolor: background === 'dark' ? palette.paper.black : palette.grey[50],
          }}
        >
          <Box sx={ICON_WITH_LABEL_STYLE}>
            <Box
              sx={{
                color: background === 'dark' ? palette.grey[300] : palette.grey[600],
              }}
            >
              <Icon.Cog />
            </Box>
            <Typography
              variant="body2"
              sx={{
                ...LABEL_STYLE,
                color: FONT_COLOR,
              }}
            >
              {COLOR.labels[0]}
            </Typography>
          </Box>
          <Box sx={ICON_WITH_LABEL_STYLE}>
            <Box
              sx={{
                color:
                  background === 'dark' ? palette.primary.light : palette.primary.dark,
              }}
            >
              <Icon.Cog />
            </Box>
            <Typography
              variant="body2"
              sx={{
                ...LABEL_STYLE,
                color: FONT_COLOR,
              }}
            >
              {COLOR.labels[1]}
            </Typography>
          </Box>
          <Box sx={ICON_WITH_LABEL_STYLE}>
            <Box sx={{ color: palette.primary.main }}>
              <Icon.Cog />
            </Box>
            <Typography
              variant="body2"
              sx={{
                ...LABEL_STYLE,
                color: FONT_COLOR,
              }}
            >
              {COLOR.labels[2]}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                ...LABEL_STYLE,
                color: FONT_COLOR,
              }}
            >
              {COLOR.labels[3]}
            </Typography>
          </Box>
          <Box sx={ICON_WITH_LABEL_STYLE}>
            <Box
              sx={{
                color: background === 'dark' ? palette.grey[50] : palette.grey[300],
              }}
            >
              <Icon.Cog />
            </Box>
            <Typography
              variant="body2"
              sx={{
                ...LABEL_STYLE,
                color: FONT_COLOR,
              }}
            >
              {COLOR.labels[4]}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" sx={LABEL_STYLE}>
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
};

const Color: React.FC = () => {
  const { palette } = useTheme();
  return (
    <Grid item xs={12}>
      <Grid container columnGap={3}>
        <Grid item xs={2}>
          <SubTitle subTitle={COLOR.subTitle} />
          <Typography variant="body2">{COLOR.paragraph1}</Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            {COLOR.paragraph2}
          </Typography>
        </Grid>
        <Grid item xs={2.5}>
          <IconsGroup palette={palette} background="dark">
            {COLOR.IconExampleExplanation1}
          </IconsGroup>
        </Grid>
        <Grid item xs={2.5}>
          <IconsGroup palette={palette} background="light">
            {COLOR.IconExampleExplanation2}
          </IconsGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Color;
