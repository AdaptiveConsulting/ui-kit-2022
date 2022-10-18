import { Box, Typography } from '@mui/material';
import * as React from 'react';

interface Props {
  title: JSX.Element | string;
}

const TopBar: React.FC<Props> = ({ title }) => {
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

export default TopBar;
