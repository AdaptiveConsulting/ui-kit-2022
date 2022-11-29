import { Theme } from '@mui/material';
export default {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      ' * td, * th': {
        padding: '8px',
        verticalAlign: 'top',
        borderColor: theme.palette.divider,
      },
      'tr:last-child td, tr:last-child th': { border: 0 },
      th: { fontWeight: 500 },
      td: { color: theme.palette.text.secondary },
    }),
  },
};
