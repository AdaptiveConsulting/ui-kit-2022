import { Theme } from '@mui/material';

export default {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      outline: 'none !important',
      padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
      borderRadius: '100px',
      '&:first-child': {
        marginTop: theme.spacing(2),
      },
      '&:last-child': {
        marginBottom: theme.spacing(2),
      },
      '&:hover': {
        backgroundColor: `${theme.palette.primary[theme.palette.mode]} !important`,
      },
      '&.Mui-focusVisible': {
        backgroundColor: `${theme.palette.primary[theme.palette.mode]} !important`,
      },
    }),
  },
};
