import { Box, Typography } from '@mui/material';
import * as React from 'react';

interface TypographyTopProps {
  title: 'TYPES' | 'STYLE';
}

const TypographyTop: React.FunctionComponent<TypographyTopProps> = ({ title }) => {
  return (
    <Box
      sx={{
        height: '68px',
        bgcolor: '#555555',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Typography sx={{ color: '#FFFFFF', marginLeft: '1rem' }}>{title}</Typography>
    </Box>
  );
};

export default TypographyTop;
