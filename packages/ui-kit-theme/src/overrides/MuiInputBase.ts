export default {
  styleOverrides: {
    root: ({ theme: { palette }, ownerState }: any) => ({
      paddingLeft: '12px',
      caretColor: palette.primary.main,
      '&:before': {
        borderBottom: `2px solid ${
          palette.grey[palette.mode === 'light' ? 200 : 700]
        } !important`,
      },
    }),
    input: ({ theme }: any) => ({
      fontFamily: 'Merriweather',
    }),
  },
};
