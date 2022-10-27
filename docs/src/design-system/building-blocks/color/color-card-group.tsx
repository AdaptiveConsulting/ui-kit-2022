import { Grid } from '@mui/material';
import * as React from 'react';

import ColorCard, { Props as ColorCardProps } from './color-card';

type ColorProps = Pick<ColorCardProps, 'token' | 'color' | 'bgColor'>;

interface Props {
  colors: Array<ColorProps>;
}

const addPositionProp = (
  color: ColorProps,
  index: number,
  length: number,
): ColorCardProps => {
  if (index === 0 && length > 1) {
    return { ...color, position: 'left' };
  } else if (index === length - 1 && length > 1) {
    return { ...color, position: 'right' };
  }
  return { ...color, position: 'middle' };
};

const ColorCardGroup: React.FC<Props> = ({ colors }) => {
  return (
    <Grid container wrap={'nowrap'} sx={{ padding: '2px 0px' }}>
      {colors.map((value, index, arr) => (
        <Grid item key={value.token + index}>
          <ColorCard {...addPositionProp(value, index, arr.length)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ColorCardGroup;
