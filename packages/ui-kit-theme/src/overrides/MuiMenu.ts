import { Theme } from '@mui/material';

export default {
  styleOverrides: {
    paper: ({ theme }: { theme: Theme }) => {
      const shadowColor = theme.palette.mode === 'light' ? '0' : '255';
      return {
        backgroundColor: `${
          theme.palette.mode === 'light' ? 'white' : 'black'
        } !important`,
        backgroundImage: 'none !important',
        marginTop: '10px',
        boxShadow: `0px 4px 20px rgba(${(shadowColor + ',').repeat(3)} 0.15) !important`,
        borderRadius: `${theme.spacing(3)} !important`,
      };
    },
    list: {
      padding: '0 10px',
      // Keeps IOS scroll bar from being hidden by the groupLabel
      '-webkit-transform': 'translate3d(0,0,0)',
    },
  },
};
