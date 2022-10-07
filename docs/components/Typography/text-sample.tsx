import { Box, Typography } from '@mui/material';
import * as React from 'react';

const LETTERS = 'AaBbCcDDEEFFGgHHIiJjKKLLMmNNOoPPQqRRSsTtUuVvWwXxYyZz';
const NUMBERS = '0123456789';

interface TextSampleProps {
  fontName: 'Roboto' | 'Merriweather';
}

const TextSample: React.FC<TextSampleProps> = ({ fontName }) => {
  return (
    <Box sx={{ bgcolor: '#323232' }}>
      <Typography sx={{ color: '#FFFFFF', fontSize: '24px', marginBottom: '10px' }}>
        {fontName.toUpperCase()}
      </Typography>
      <Typography
        sx={{
          wordBreak: 'break-word',
          color: '#CFCFCF',
          fontSize: '12px',
          fontFamily: `${fontName}`,
        }}
      >
        {LETTERS}
      </Typography>
      <Typography
        sx={{
          color: '#CFCFCF',
          fontSize: '12px',
          fontFamily: `${fontName}`,
        }}
      >
        {NUMBERS}
      </Typography>
    </Box>
  );
};

export default TextSample;
