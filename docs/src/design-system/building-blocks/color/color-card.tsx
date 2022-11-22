import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

export interface Props {
  token: string;
  bgColor: string;
  color: string;
  opacity?: number;
}

const ColorCard: React.FC<Props> = ({ token, bgColor, color, opacity }) => {
  return (
    <Box
      sx={{
        bgcolor: bgColor,
        color: color,
        opacity: opacity ? opacity : 0.95,
        height: '58px',
        width: '160px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '12px',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: '700', fontSize: '13px' }}>
        {token}
      </Typography>
      <Typography variant="body2">
        {opacity ? Math.floor(opacity * 100) + '% OPACITY' : bgColor}
      </Typography>
    </Box>
  );
};

export default ColorCard;
