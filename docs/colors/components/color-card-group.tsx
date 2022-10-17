import { Box } from '@mui/material';
import * as React from 'react';

import ColorCard, { Props as ColorCardProps } from './color-card';

type Prop = Pick<ColorCardProps, 'token' | 'color' | 'bgColor'>;
type Props = Array<Prop>;

const generateColorCardProps = (colors: Props): Array<ColorCardProps> => {
  return colors.map((value, index, arr) => {
    if (index === 0 && arr.length > 1) {
      return { ...value, position: 'left' };
    } else if (index === arr.length - 1 && arr.length > 1) {
      return { ...value, position: 'right' };
    } else {
      return { ...value, position: 'middle' };
    }
  });
};

const ColorCardGroup: React.FC<Props> = (colors) => {
  const colorCardProps = generateColorCardProps(colors);

  return (
    <Box>
      {colorCardProps.map((value, index) => (
        <ColorCard key={value.token + index} {...value} />
      ))}
    </Box>
  );
};

export default ColorCardGroup;
