import {
  alpha,
  ChipProps,
  PaletteColor,
  PaletteColorOptions,
  Theme,
} from '@mui/material';

type PaletteColorOption = keyof PaletteColorOptions;

type OverrideContext = {
  theme: Theme;
  ownerState: ChipProps;
};

export default {
  defaultProps: {
    size: 'small' as ChipProps['size'],
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme, ownerState }: OverrideContext) => ({
      height: 'auto',
      borderRadius: '8px',

      // Material UI has action palettes that augment colors based on the action
      // If the designers will support it, it can be used instead
      '&.MuiButtonBase-root:active, &.MuiButtonBase-root:hover': {
        boxShadow: 'none',

        // Border color transitions to the opposite color variation from the theme on active and hover
        ...(ownerState.color !== 'default' && {
          borderColor:
            theme.palette[ownerState.color as PaletteColorOption][
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
    label: ({ theme }: OverrideContext) => ({
      fontSize: theme.typography.button.fontSize,
      fontFamily: theme.typography.button.fontFamily,
      fontWeight: theme.typography.button.fontWeight,
      textTransform: 'uppercase' as const,

      lineHeight: '13px',
      padding: '4px',
    }),
    filled: ({ theme, ownerState }: OverrideContext) => ({
      // Ensures smooth border transition when entering active state.
      border: '1px solid transparent',
      ...(ownerState.color !== 'default' &&
        (theme.palette.mode === 'light'
          ? {
              '&.MuiButtonBase-root:hover': {
                // Color changes to white on hover in light mode
                color: alpha(theme.palette.common.white, 0.95),
                // Background color darkens on hover in light mode
                backgroundColor: (
                  theme.palette[ownerState.color as PaletteColorOption] as PaletteColor
                ).dark,
              },
              '&.MuiButtonBase-root:active': {
                // Changes back to the primary text color
                color: `${theme.palette.text.primary} !important`,
                // Changes background color back to main
                backgroundColor: (
                  theme.palette[ownerState.color as PaletteColorOption] as PaletteColor
                ).main,
              },
            }
          : {
              '&.MuiButtonBase-root:hover': {
                backgroundColor: `${
                  (theme.palette[ownerState.color as PaletteColorOption] as PaletteColor)
                    .light
                }`,
              },
              '&.MuiButtonBase-root:active': {
                backgroundColor: (
                  theme.palette[ownerState.color as PaletteColorOption] as PaletteColor
                ).main,
              },
            })),
    }),
    outlined: ({ theme, ownerState }: OverrideContext) => ({
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
                color: theme.palette[ownerState.color as PaletteColorOption]['light'],
              },
              // In dark mode, when in an active state, the text color dims back to normal
              '&.MuiButtonBase-root:active': {
                color: `${
                  theme.palette[ownerState.color as PaletteColorOption]['main']
                } !important`,
              },
            })),
    }),
    // Make label color accessible for Error and Secondary colors
    colorError: ({ theme, ownerState }: OverrideContext) => ({
      ...(ownerState.variant === 'filled' && {
        color: alpha(theme.palette.common.black, 0.95),
      }),
    }),
    colorSecondary: ({ theme, ownerState }: OverrideContext) => ({
      ...(ownerState.variant === 'filled' && {
        color: alpha(theme.palette.common.black, 0.95),
      }),
    }),
    colorInfo: ({ theme, ownerState }: OverrideContext) => ({
      ...(ownerState.variant === 'filled' && {
        color: alpha(theme.palette.common.black, 0.95),
      }),
    }),
    icon: {
      width: '16px',
      height: '16px',
    },
    deleteIcon: {
      width: '16px',
      height: '16px',
      color: 'inherit !important',
      // This icon can be clicked.
      // Do the hover state colors for this prop need to be overriden to reflect that?
      //'&:hover': theme.palette.text.primary
    },
  },
};
