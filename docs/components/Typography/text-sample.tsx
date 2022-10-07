import { Box, Typography } from '@mui/material';
import * as React from 'react';

const LETTERS = 'AaBbCcDDEEFFGgHHIiJjKKLLMmNNOoPPQqRRSsTtUuVvWwXxYyZz';
const NUMBERS = '0123456789';

function capitablize(s: string) {
  const lower = s.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

interface TextSampleProps {
  fontName: string;
}

const TextSample: React.FC<TextSampleProps> = ({ fontName }) => {
  return (
    <Box sx={{ bgcolor: '#323232' }}>
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
};

export default TextSample;
