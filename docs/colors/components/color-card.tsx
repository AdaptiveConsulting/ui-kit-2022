import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

type PostionType = 'left' | 'middle' | 'right';

export interface Props {
  token: string;
  bgColor: string;
  color: string;
  opacity?: number;
  position: PostionType;
}

const radiusStyle = (position: PostionType) => {
  if (position === 'left') {
    return '5px 0px 0px 5px';
  } else if (position === 'right') {
    return '0px 5px 5px 0px';
  }

  return '0px 0px 0px 0px';
};

const ColorCard: React.FC<Props> = ({ token, bgColor, color, opacity, position }) => {
  return (
    <Box
      sx={{
        bgcolor: `${bgColor}`,
        color: `${color}`,
        opacity: `${opacity ? opacity : 0.95}`,
        height: '58px',
        width: '160px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '12px',
        borderRadius: `${radiusStyle(position)}`,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: '700', fontSize: '13px' }}>
        {token}
      </Typography>
      <Typography variant="body2">
        {opacity ? `${Math.floor(opacity * 100) + '% OPACITY'}` : bgColor}
      </Typography>
    </Box>
  );
};

export default ColorCard;
