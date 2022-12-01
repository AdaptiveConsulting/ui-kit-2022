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
        borderRadius: theme.spacing(3),
        marginTop: '10px',
        boxShadow: `0px 4px 20px rgba(${(shadowColor + ',').repeat(3)} 0.15)`,
        backgroundImage: 'none',
      };
    },
    listbox: ({ theme }: { theme: Theme }) => ({
      margin: '0 10px',
      padding: 0,
      // Keeps IOS scroll bar from being hidden by the groupLabel
      '-webkit-transform': 'translate3d(0,0,0)',
    }),
    groupLabel: ({ theme }: { theme: Theme }) => ({
      ...theme.typography.body2,
      backgroundColor: theme.palette.mode === 'light' ? 'white' : 'black',
      padding: `${theme.spacing(4)} ${theme.spacing(3)}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
      top: 0,
    }),
    option: ({ theme }: { theme: Theme }) => ({
      padding: `${theme.spacing(2)} ${theme.spacing(4)} !important`,
      borderRadius: '100px',
      '&:first-child': {
        marginTop: theme.spacing(2),
      },
      '&:last-child': {
        marginBottom: theme.spacing(2),
      },
      '&.Mui-focused': {
        backgroundColor: `${theme.palette.primary[theme.palette.mode]} !important`,
      },
      '& > span.prediction-highlight': {
        color: theme.palette.grey[600],
      },
      '&.Mui-focused > span.prediction-highlight': {
        color: 'inherit',
      },
    }),
  },
};
