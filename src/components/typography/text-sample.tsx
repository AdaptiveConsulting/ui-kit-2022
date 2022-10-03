import { Box, Card, Typography } from '@mui/material';
import * as React from 'react';

const LETTERS = 'AaBbCcDDEEFFGgHHIiJjKKLLMmNNOoPPQqRRSsTtUuVvWwXxYyZz';
const NUMBERS = '0123456789';

type FontName = 'roboto' | 'merriweather';

function capitablize(s: string) {
  const lower = s.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export default function TextSample({ fontName }: { fontName: string }) {
  return (
    <Box sx={{ width: '362px', bgcolor: '#383838' }}>
      <Typography
        variant="h3"
        sx={{ color: '#FFFFFF', fontSize: '24px', marginBottom: '10px' }}
      >
        {fontName.toUpperCase()}
      </Typography>
      <Typography
        sx={{
          wordBreak: 'break-word',
          color: '#CFCFCF',
          fontSize: '12px',
          fontFamily: `${capitablize(fontName)}`,
        }}
      >
        {LETTERS}
      </Typography>
      <Typography
        sx={{
          color: '#CFCFCF',
          fontSize: '12px',
          fontFamily: `${capitablize(fontName)}`,
        }}
      >
        {NUMBERS}
      </Typography>
    </Box>
  );
}
