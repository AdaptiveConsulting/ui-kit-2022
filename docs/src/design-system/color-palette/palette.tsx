import { Box, Grid, Palette, Typography, useTheme } from '@mui/material';
import { BrandIcon, Icon } from '@ui-kit-2022/components';
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

const TextContent = ({ children, width }: { children: string; width?: string }) => {
  return (
    <Grid item xs={12}>
      <Typography
        variant="body2"
        sx={{ width: width ? width : '50%', margin: '6px 0px' }}
      >
        {children}
      </Typography>
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
    <Grid sx={{ minWidth: '1950px' }}>
      <Grid item xs={12}>
        <TopBar icon={BrandIcon.LogoSmall} title={'Reactive Design System'} />
      </Grid>
      <Grid
        container
        sx={{
          bgcolor:
            palette.mode === 'dark' ? palette.background.paper : palette.common.white,
          color: palette.text.primary,
          padding: '1rem',
        }}
        rowGap={5}
      >
        <SubTitle subTitle={PURPOSE.title} />
        <TextContent>{PURPOSE.content[0]}</TextContent>
        <TextContent>{PURPOSE.content[1]}</TextContent>
        {COLORS.map((color, index) => {
          return (
            <Grid key={color.content + index} container columnGap={1}>
              <Grid item xs={2}>
                {color.title && <SubTitle subTitle={color.title} />}
                {color.content && <TextContent width="100%">{color.content}</TextContent>}
              </Grid>
              <Grid item xs={9}>
                {color.colors.map((value, index) => (
                  <ColorCardGroup key={JSON.stringify(value) + index} colors={value} />
                ))}
              </Grid>
            </Grid>
          );
        })}
        <Grid container columnGap={2}>
          <Grid item xs={4}>
            <Typography variant={'body2'}>{COLOR_CONTRAST_EXPLANATION[0]}</Typography>
            <Typography variant={'body2'}>{COLOR_CONTRAST_EXPLANATION[1]}</Typography>
          </Grid>
          <Grid item xs={6}>
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
