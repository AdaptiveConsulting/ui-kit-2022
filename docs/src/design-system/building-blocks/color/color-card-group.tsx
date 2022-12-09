import { Grid } from '@mui/material';
import * as React from 'react';

import ColorCard, { Props as ColorCardProps } from './color-card';

type ColorProps = Pick<ColorCardProps, 'token' | 'color' | 'bgColor'>;

export interface Props {
  colors: Array<ColorProps>;
}

const ColorCardGroup: React.FC<Props> = ({ colors }) => {
  return (
    <Grid
      container
      wrap={'nowrap'}
      sx={{
        padding: '2px 0px',
        overflowX: 'auto',
      }}
      direction={{ xxs: 'column', sm: 'row' }}
    >
      {colors.map((value, index) => (
        <Grid
          item
          key={value.token + index}
          sx={{
            '&:first-child > .MuiBox-root': {
              borderRadius: { xs: '5px 5px 0px 0px', sm: '5px 0px 0px 5px' },
            },
            '&:last-child > .MuiBox-root': {
              borderRadius: { xs: '0px 0px 5px 5px', sm: '0px 5px 5px 0px' },
            },
          }}
        >
          <ColorCard {...value} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ColorCardGroup;
