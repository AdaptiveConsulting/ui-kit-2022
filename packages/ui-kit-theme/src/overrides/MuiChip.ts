import { alpha } from '@mui/material';

export default {
  defaultProps: {
    size: 'small',
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme, ownerState }: any) => ({
      height: 'auto',
      borderRadius: '8px',

      // Material UI has action palettes that augment colors based on the action
      // If the designers will support it, it can be used instead
      '&.MuiButtonBase-root:active, &.MuiButtonBase-root:hover': {
        boxShadow: 'none',

        // Border color transitions to the opposite color variation from the theme on active and hover
        ...(ownerState.color !== 'default' && {
          borderColor:
            theme.palette[ownerState.color][
              theme.palette.mode === 'light' ? 'dark' : 'light'
            ],
        }),
      },
      /*
       * Should the focus outline be enabled or disabled when only the onDelete event is attached?
      ...(ownerState.onDelete && !ownerState.onClick && {
        '&:focus': {
          outline: 'none'
        }
      })
      */
    }),
    label: ({ theme }: any) => ({
      fontSize: theme.typography.button.fontSize,
      fontFamily: theme.typography.button.fontFamily,
      fontWeight: theme.typography.button.fontWeight,
      textTransform: 'uppercase',

      lineHeight: '13px',
      padding: '4px',
    }),
    filled: ({ theme, ownerState }: any) => ({
      // Ensures smooth border transition when entering active state.
      border: '1px solid transparent',
      ...(ownerState.color !== 'default' &&
        (theme.palette.mode === 'light'
          ? {
              '&.MuiButtonBase-root:hover': {
                // Color changes to white on hover in light mode
                color: alpha(theme.palette.common.white, 0.95),
                // Background color darkens on hover in light mode
                backgroundColor: theme.palette[ownerState.color].dark,
              },
              '&.MuiButtonBase-root:active': {
                // Changes back to the primary text color
                color: `${theme.palette.text.primary} !important`,
                // Changes background color back to main
                backgroundColor: theme.palette[ownerState.color].main,
              },
            }
          : {
              '&.MuiButtonBase-root:hover': {
                backgroundColor: `${theme.palette[ownerState.color].light}`,
              },
              '&.MuiButtonBase-root:active': {
                backgroundColor: theme.palette[ownerState.color].main,
              },
            })),
    }),
    outlined: ({ theme, ownerState }: any) => ({
      ...(ownerState.color !== 'default' &&
        (theme.palette.mode === 'light'
          ? {
              // Border color is always primary for outlined variant in light mode
              color: theme.palette.text.primary,
            }
          : {
              // Ensure text color is set to the primary text color when Chip color is not primary
              ...(ownerState.color !== 'primary' && {
                color: theme.palette.text.primary,
              }),
              // In dark mode, the text color lightens on hover
              '&.MuiButtonBase-root:hover': {
                color: theme.palette[ownerState.color]['light'],
              },
              // In dark mode, when in an active state, the text color dims back to normal
              '&.MuiButtonBase-root:active': {
                color: `${theme.palette[ownerState.color]['main']} !important`,
              },
            })),
    }),
    // Make label color accessible for Error and Secondary colors
    colorError: ({ theme, ownerState }: any) => ({
      ...(ownerState.variant === 'filled' && {
        color: alpha(theme.palette.common.black, 0.95),
      }),
    }),
    colorSecondary: ({ theme, ownerState }: any) => ({
      ...(ownerState.variant === 'filled' && {
        color: alpha(theme.palette.common.black, 0.95),
      }),
    }),
    icon: {
      width: '16px',
      height: '16px',
    },
    deleteIcon: ({ theme }: any) => ({
      width: '16px',
      height: '16px',
      color: 'inherit !important',
      // This icon can be clicked.
      // Do the hover state colors for this prop need to be overriden to reflect that?
      //'&:hover': theme.palette.text.primary
    }),
  },
};
