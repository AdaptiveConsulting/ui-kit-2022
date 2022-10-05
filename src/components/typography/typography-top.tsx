import { Box, Typography } from '@mui/material';
import * as React from 'react';

interface TypographyTopProps {
  title: 'TYPES' | 'STYLE';
}

export default function TypographyTop({ title }: TypographyTopProps) {
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
      <Typography sx={{ color: '#FFFFFF', marginLeft: '2rem' }}>{title}</Typography>
    </Box>
  );
}
