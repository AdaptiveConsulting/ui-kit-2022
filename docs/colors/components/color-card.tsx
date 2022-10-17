import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

type PostionType = 'left' | 'middle' | 'right';

interface Props {
  token: string;
  bgColor: string;
  color: string;
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

const ColorCard: React.FC<Props> = ({ token, bgColor, color, position }) => {
  return (
    <Box
      sx={{
        bgcolor: `${bgColor}`,
        color: `${color}`,
        height: '58px',
        width: '160px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '12px',
        borderRadius: `${radiusStyle(position)}`,
      }}
    >
      <Typography
        sx={{ fontSize: '16px', fontWeight: '700', fontFamily: 'Merriweather Serif' }}
      >
        {token}
      </Typography>
      <Typography sx={{ fontSize: '12px', fontWeight: '400', fontFamily: 'Roboto' }}>
        {bgColor}
      </Typography>
    </Box>
  );
};

export default ColorCard;
