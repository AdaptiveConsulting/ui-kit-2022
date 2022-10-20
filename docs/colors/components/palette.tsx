import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';

import { LogoSmall } from '../../../src/components/Branding/raw-icons';
import { Cog } from '../../../src/icons';
import TopBar from '../../common/top-bar';
import ColorCardGroup from './color-card-group';
import { COLOR_CONTRAST_EXPLANATION, COLORS, PURPOSE } from './palette.constants';

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
        sx={{ width: `${width ? width : '50%'}`, margin: '6px 0px' }}
      >
        {children}
      </Typography>
    </Grid>
  );
};

const ColorIcons = () => {
  const IconWrapper = ({ color, bgColor }: { color: string; bgColor: string }) => {
    return (
      <Grid item xs={3}>
        <Box
          sx={{ bgcolor: `${bgColor}`, width: '24px', height: '24px', color: `${color}` }}
        >
          <Cog sx={{ width: '18px', height: '18px' }} viewBox="-2 -2 16 16" />
        </Box>
      </Grid>
    );
  };

  return (
    <Grid container sx={{ width: '146px' }}>
      <IconWrapper color="#6B6B6B" bgColor="#4D4D4D" />
      <IconWrapper color="#B60017" bgColor="#FF274B" />
      <IconWrapper color="#5F618D" bgColor="#FF274B" />
      <IconWrapper color="#5F618D" bgColor="#01C38D" />
    </Grid>
  );
};

const Palette: React.FC = () => {
  return (
    <Grid sx={{ minWidth: '1950px' }}>
      <Grid item xs={12}>
        <TopBar icon={LogoSmall} title={'Reactive Design System'} />
      </Grid>
      <Grid
        container
        sx={{ bgcolor: '#323232', color: '#FFFFFF', padding: '1rem' }}
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
            <ColorIcons />
            <Grid item xs={12} sx={{ width: '250px', mt: '1rem' }}>
              <Typography
                variant={'body2'}
                sx={{ color: '#CFCFCF', fontStyle: 'italic', fontSize: '11px' }}
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

export default Palette;
