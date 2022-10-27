import { Box, Grid, Palette, Typography, useTheme } from '@mui/material';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

import { SubTitle } from '../common';

type BackgroundType = 'dark' | 'light';

const IconsGroup: React.FC<{
  children: string;
  background: BackgroundType;
  palette: Palette;
}> = ({ children, background, palette }) => {
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
            bgcolor: background === 'dark' ? 'inherit' : palette.grey[50],
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
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
                ontSize: '11px',
                fontWeight: '300',
                fontStyle: 'italic',
                color: background === 'dark' ? 'inherit' : palette.grey[900],
              }}
            >
              Default
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
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
                ontSize: '11px',
                fontWeight: '300',
                fontStyle: 'italic',
                color: background === 'dark' ? 'inherit' : palette.grey[900],
              }}
            >
              Hover
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ color: palette.primary.main }}>
              <Icon.Cog />
            </Box>
            <Typography
              variant="body2"
              sx={{
                ontSize: '11px',
                fontWeight: '300',
                fontStyle: 'italic',
                color: background === 'dark' ? 'inherit' : palette.grey[900],
              }}
            >
              Active
            </Typography>
            <Typography
              variant="body2"
              sx={{
                ontSize: '11px',
                fontWeight: '300',
                fontStyle: 'italic',
                color: background === 'dark' ? 'inherit' : palette.grey[900],
              }}
            >
              (pressed)
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{ color: background === 'dark' ? palette.grey[50] : palette.grey[300] }}
            >
              <Icon.Cog />
            </Box>
            <Typography
              variant="body2"
              sx={{
                ontSize: '11px',
                fontWeight: '300',
                fontStyle: 'italic',
                color: background === 'dark' ? 'inherit' : palette.grey[900],
              }}
            >
              Disabled
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          sx={{ fontSize: '11px', fontWeight: '300', fontStyle: 'italic' }}
        >
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
          <SubTitle subTitle="Color" />
          <Typography variant="body2">
            Use icon colors with enough color contrast against their backgrounds. The
            contrast ratio of an icon to its background must be at least 3:1.
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            Exception: interactive elements that are disabled.
          </Typography>
        </Grid>
        <Grid item xs={2.5}>
          <IconsGroup palette={palette} background="dark">
            Use these colors against background colors of Core-Primary-2 or darker.
          </IconsGroup>
        </Grid>
        <Grid item xs={2.5}>
          <IconsGroup palette={palette} background="light">
            Use these colors against background colors of Core-Secondary-4 or lighter.
          </IconsGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Color;
