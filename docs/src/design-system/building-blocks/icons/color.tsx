import { Box, Grid, Palette, Typography, useMediaQuery, useTheme } from '@mui/material';
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
      sx={{ height: '100%', width: '100%', fontSize: '11px', fontWeight: '300' }}
    >
      <Grid item xxs={12}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
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
      <Grid item xxs={12}>
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
    <Grid container columns={{ xs: 2, md: 4 }} columnSpacing={5} rowGap={5}>
      <Grid item xxs={2} sm={1.5} md={1}>
        <SubTitle subTitle={COLOR.subTitle} />
        <Typography variant="body2">{COLOR.paragraph1}</Typography>
        <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
          {COLOR.paragraph2}
        </Typography>
      </Grid>
      <Grid
        item
        container
        xxs={2}
        md={1}
        columns={2}
        columnSpacing={2}
        display="flex"
        sx={{
          flexDirection: useMediaQuery('(max-width: 400px') ? 'column' : null,
          ' > div': {
            maxWidth: useMediaQuery('(max-width: 400px') ? '100%' : null,
          },
        }}
      >
        <Grid item xxs={1}>
          <IconsGroup palette={palette} background="dark">
            {COLOR.IconExampleExplanation1}
          </IconsGroup>
        </Grid>
        <Grid item xxs={1}>
          <IconsGroup palette={palette} background="light">
            {COLOR.IconExampleExplanation2}
          </IconsGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Color;
