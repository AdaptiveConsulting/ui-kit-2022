import { Theme } from '@mui/material';

export default {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      '&:active': {
        outline: 'none !important',
      },
      '&:focus::before': {
        content: `""`,
        position: 'absolute' as const,
        top: '-5px',
        right: '-5px',
        bottom: '-5px',
        left: '-5px',
        border: `2px solid ${
          theme.palette.mode === 'light'
            ? theme.palette.warning.main
            : theme.palette.warning.light
        }`,
        borderRadius: '10px',
      },
    }),
  },
};
