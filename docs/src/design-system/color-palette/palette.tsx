import { Box, Grid, Palette, Typography, useTheme } from '@mui/material';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

import ColorCardGroup from '../building-blocks/color/color-card-group';
import {
  COLOR_CONTRAST_EXPLANATION,
  COLORS,
  PURPOSE,
} from '../building-blocks/color/palette.constants';
import TopBar from '../building-blocks/common/top-bar';

const SubTitle = ({ subTitle }: { subTitle: string }) => {
  return (
    <Grid item xs={12}>
      <Typography variant={'h4'} sx={{ margin: '6px 0px' }}>
        {subTitle}
      </Typography>
    </Grid>
  );
};

const TextContent = ({ children }: { children: string }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="body2">{children}</Typography>
    </Grid>
  );
};

const ColorIcons = ({ palette }: { palette: Palette }) => {
  const IconWrapper = ({ color, bgColor }: { color: string; bgColor: string }) => {
    return (
      <Grid item xs={3}>
        <Box sx={{ bgcolor: bgColor, width: '24px', height: '24px', color: color }}>
          <Icon.Cog sx={{ width: '18px', height: '18px' }} viewBox="-2 -2 16 16" />
        </Box>
      </Grid>
    );
  };

  return (
    <Grid container sx={{ width: '146px' }}>
      <IconWrapper color={palette.grey['600']} bgColor={palette.grey['800']} />
      <IconWrapper color={palette.error.dark} bgColor={palette.error.main} />
      <IconWrapper color={palette.primary.dark} bgColor={palette.error.main} />
      <IconWrapper color={palette.primary.dark} bgColor={palette.success.main} />
    </Grid>
  );
};

const ColorPalette: React.FC = () => {
  const { palette } = useTheme();

  return (
    <Grid container>
      <Grid item xs={12}>
        <TopBar title={'Reactive Design System'} />
      </Grid>
      <Grid
        container
        sx={{
          padding: '1rem',
        }}
        columnGap={1}
        rowGap={5}
      >
        <SubTitle subTitle={PURPOSE.title} />
        <TextContent>{PURPOSE.content[0]}</TextContent>
        <TextContent>{PURPOSE.content[1]}</TextContent>
        {COLORS.map((color, index) => {
          return (
            <Grid key={color.content + index} container columnGap={2} rowGap={2}>
              <Grid item xs={12} lg={2}>
                {color.title && <SubTitle subTitle={color.title} />}
                {color.content && <TextContent>{color.content}</TextContent>}
              </Grid>
              <Grid item xs={12} lg={9}>
                {color.colors.map((value, index) => (
                  <ColorCardGroup key={JSON.stringify(value) + index} colors={value} />
                ))}
              </Grid>
            </Grid>
          );
        })}
        <Grid container rowGap={3}>
          <Grid item xs={12} md={6}>
            <Typography variant={'body2'}>{COLOR_CONTRAST_EXPLANATION[0]}</Typography>
            <Typography variant={'body2'}>{COLOR_CONTRAST_EXPLANATION[1]}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ColorIcons palette={palette} />
            <Grid item xs={12} sx={{ width: '250px', mt: '1rem' }}>
              <Typography
                variant={'body2'}
                sx={{
                  color: palette.grey['300'],
                  fontStyle: 'italic',
                  fontSize: '11px',
                }}
              >
                {COLOR_CONTRAST_EXPLANATION[2]}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ColorPalette;
