import { Theme } from '@mui/material';

export default {
  defaultProps: {
    forcePopupIcon: false,
  },
  styleOverrides: {
    paper: ({ theme }: { theme: Theme }) => {
      const shadowColor = theme.palette.mode === 'light' ? '0' : '255';
      return {
        backgroundColor: theme.palette.mode === 'light' ? 'white' : 'black',
        borderRadius: '12px',
        marginTop: '10px',
        boxShadow: `0px 4px 20px rgba(${(shadowColor + ',').repeat(3)} 0.15)`,
      };
    },
    listbox: {
      padding: 0,
      margin: '0 10px',
    },
    groupLabel: ({ theme }: { theme: Theme }) => ({
      ...theme.typography.body2,
      backgroundColor: theme.palette.mode === 'light' ? 'white' : 'black',
      padding: '16px 12px',
      borderBottom: `1px solid ${theme.palette.divider}`,
      marginBottom: '8px',
    }),
    option: ({ theme }: { theme: Theme }) => ({
      padding: '8px 16px !important',
      borderRadius: '100px',
      '&.Mui-focused': {
        backgroundColor: `${theme.palette.primary[theme.palette.mode]} !important`,
      },
    }),
  },
};
