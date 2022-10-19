import { Grid, SvgIcon, Typography } from '@mui/material';
import * as React from 'react';

import { Color0, Color1, Color2, Color3, SmallLightLogo } from '../../../src/icons';
import TopBar from '../../common/top-bar';
import ColorCardGroup from './color-card-group';
import { colorsConstant, purposeConstant } from './palette.constants';

const SubTitle = ({ subTitle }: { subTitle: string }) => {
  return (
    <Grid item xs={12}>
      <Typography sx={{ margin: '6px 0px' }}>{subTitle}</Typography>
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

const ColorIcons = () => (
  <Grid container sx={{ width: '146px' }}>
    <Grid item xs={3}>
      <SvgIcon
        component={Color0}
        viewBox="0 0 35 35"
        sx={{ width: '34px', height: '34px' }}
      />
    </Grid>
    <Grid item xs={3}>
      <SvgIcon
        component={Color1}
        viewBox="0 0 35 35"
        sx={{ width: '34px', height: '34px' }}
      />
    </Grid>
    <Grid item xs={3}>
      <SvgIcon
        component={Color2}
        viewBox="0 0 35 35"
        sx={{ width: '34px', height: '34px' }}
      />
    </Grid>
    <Grid item xs={3}>
      <SvgIcon
        component={Color3}
        viewBox="0 0 35 35"
        sx={{ width: '34px', height: '34px' }}
      />
    </Grid>
  </Grid>
);

const Palette: React.FC = () => {
  return (
    <Grid sx={{ minWidth: '1950px' }}>
      <Grid item xs={12}>
        <TopBar icon={SmallLightLogo} title={'Reactive Design System'} />
      </Grid>
      <Grid
        container
        sx={{ bgcolor: '#323232', color: '#FFFFFF', padding: '1rem' }}
        rowGap={5}
      >
        <SubTitle subTitle={purposeConstant.title} />
        <TextContent>{purposeConstant.content[0]}</TextContent>
        <TextContent>{purposeConstant.content[1]}</TextContent>
        {colorsConstant.map((color, index) => {
          return (
            <Grid key={color.content + index} container rowGap={2}>
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
            <Typography variant={'body2'}>
              All colors have been analyzed against each other in this matrix, and each
              combination given a score. Every color in our palette has AA
            </Typography>
            <Typography variant={'body2'}>
              AA or AAA: The two colors can be used as foreground and background against
              each other with no restrictions. AA18: Can be used for graphical elements,
              icons, or for text, as long as the text size is at least 18 pt. (Or 14 if
              bold) DNP: Do not use this combination for anything functional or essential.
              An exception might be a decorative object like a divider, or for a use in
              which the information is communicated in an additional way..
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <ColorIcons />
            <Grid item xs={12} sx={{ width: '180px' }}>
              <Typography
                sx={{ color: '#CFCFCF', fontStyle: 'italic', fontSize: '11px' }}
              >
                Some examples of color combinations that are inaccessible.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Palette;
