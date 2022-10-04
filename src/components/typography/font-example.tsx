import { Box, Typography } from '@mui/material';
import * as React from 'react';

export interface ExampleProps {
  title: string;
  content: string;
}

interface FontWeightAndStyle {
  fontWeight: string;
  fontStyle?: string;
}

type fontOption = 'Light Italic' | 'Medium' | 'Regular';

function getFontWeightAndFontStyle(s: string): FontWeightAndStyle {
  if (s === 'Light Italic') {
    return { fontWeight: '300', fontStyle: 'italic' };
  } else if (s === 'Medium') {
    return { fontWeight: '500' };
  } else {
    return { fontWeight: '400' };
  }
}

export default function FontExample({ title, content }: ExampleProps) {
  return (
    <Box sx={{ bgcolor: '#323232', height: '60px', width: '300px' }}>
      <Typography
        sx={{ fontSize: '20px', color: '#F2F2F2', ...getFontWeightAndFontStyle(title) }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: '20px', color: '#F2F2F2' }}>{content}</Typography>
    </Box>
  );
}
