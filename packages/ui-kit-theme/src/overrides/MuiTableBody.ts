export default {
  styleOverrides: {
    root: ({ theme }: any) => ({
      'tr:last-child td, tr:last-child th': { border: 0 },
      'td, th': {
        verticalAlign: 'top',
        borderColor: theme.palette.divider,
      },
      th: { fontWeight: 500 },
      td: { color: theme.palette.text.secondary },
    }),
  },
};
