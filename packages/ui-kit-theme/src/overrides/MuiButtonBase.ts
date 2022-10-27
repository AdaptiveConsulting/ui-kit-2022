export default {
  styleOverrides: {
    root: ({ theme }: any) => ({
      '&:active': {
        outline: 'none !important',
      },
      '&:focus': {
        outline: `2px solid ${
          theme.palette.mode === 'light'
            ? theme.palette.warning.main
            : theme.palette.warning.light
        }`,
        outlineOffset: '2px',
      },
    }),
  },
};
