type VariantType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    PRIMARY: true;
    SECONDARY: true;
    TERTIARY: true;
  }
}

const LIGHT_BUTTON = {
  variants: [
    {
      props: { variant: 'PRIMARY' as VariantType },
      style: {
        position: 'relative' as const,
        borderRadius: '100px',
        color: '#000000',
        backgroundColor: '#DBDDFF',
        padding: '0 4px',
        '&:hover': {
          backgroundColor: '#A9ABD1',
        },
        '&:active': {
          border: '1px solid #A9ABD1',
          backgroundColor: '#DBDDFF',
        },
        '&:focus': {
          outline: 'none !important',
        },
        '&:focus::before': {
          content: `""`,
          position: 'absolute' as const,
          top: '-5px',
          right: '-5px',
          bottom: '-5px',
          left: '-5px',
          border: '2px solid #FF8D00',
          borderRadius: '101px',
        },
        '&:focus:not(:focus-visible)': { position: 'relative', border: 'none' },
        '&:focus:not(:focus-visible)::before': {
          position: 'relative',
          border: 'none',
          content: 'none',
        },
        '&:focus-visible::before': {
          content: `""`,
          position: 'absolute' as const,
          top: '-5px',
          right: '-5px',
          bottom: '-5px',
          left: '-5px',
          border: '2px solid #FF8D00',
          borderRadius: '101px',
        },
        '&:disabled': {
          backgroundColor: '#E4E4E4',
          color: '#7F7F7F',
        },
      },
    },
    {
      props: { variant: 'SECONDARY' as VariantType },
      style: {
        position: 'relative' as const,
        border: `1px solid #5F618D`,
        borderRadius: '100px',
        padding: '0 4px',
        color: '#5F618D',
        '&:hover': {
          backgroundColor: '#5F618D',
          color: '#FFFFFF',
        },
        '&:active': {
          border: `1px solid #5F618D`,
          backgroundColor: '#FFFFFF',
          color: '#5F618D',
        },
        '&:focus': {
          outline: 'none',
        },
        '&:focus::before': {
          content: `""`,
          position: 'absolute' as const,
          top: '-5px',
          right: '-5px',
          bottom: '-5px',
          left: '-5px',
          border: '2px solid #FF8D00',
          borderRadius: '101px',
        },
        '&:focus:not(:focus-visible)': { position: 'relative', border: 'none' },
        '&:focus:not(:focus-visible)::before': {
          position: 'relative',
          border: 'none',
          content: 'none',
        },
        '&:focus-visible': {
          border: '1px solid #5F618D',
          color: '#5F618D',
        },
        '&:focus-visible::before': {
          content: `""`,
          position: 'absolute' as const,
          top: '-5px',
          right: '-5px',
          bottom: '-5px',
          left: '-5px',
          border: '2px solid #FF8D00',
          borderRadius: '101px',
        },
        '&:focus-visible:hover': {
          backgroundColor: '#5F618D',
          color: '#FFFFFF',
        },
        '&:disabled': {
          border: 'none',
          backgroundColor: '#E4E4E4',
          color: '#7F7F7F',
        },
      },
    },
    {
      props: { variant: 'TERTIARY' as VariantType },
      style: {
        position: 'relative' as const,
        padding: '0 4px',
        color: '#5F618D',
        borderRadius: '100px',
        backgroundColor: 'inherit',
        '&:hover': {
          textDecoration: 'underline',
          backgroundColor: 'inherit',
        },
        '&:active': {
          border: `1px solid #5F618D`,
          color: '#5F618D',
          textDecoration: 'none',
        },
        '&:focus': {
          outline: 'none',
          border: '1px solid #5F618D',
        },
        '&:focus::before': {
          content: `""`,
          position: 'absolute' as const,
          top: '-5px',
          right: '-5px',
          bottom: '-5px',
          left: '-5px',
          border: '2px solid #FF8D00',
          borderRadius: '101px',
        },
        '&:focus:not(:focus-visible)': { position: 'relative', border: 'none' },
        '&:focus:not(:focus-visible)::before': {
          position: 'relative',
          border: 'none',
          content: 'none',
        },
        '&:focus-visible': {
          border: '1px solid #5F618D',
          textDecoration: 'none',
        },
        '&:focus-visible::before': {
          content: `""`,
          position: 'absolute' as const,
          top: '-5px',
          right: '-5px',
          bottom: '-5px',
          left: '-5px',
          border: '2px solid #FF8D00',
          borderRadius: '101px',
        },
        '&:focus-visible:hover': {
          textDecoration: 'underline',
        },
        '&:disabled': {
          border: 'none',
          backgroundColor: '#E4E4E4',
          color: '#7F7F7F',
        },
      },
    },
  ],
};

const DARK_BUTTON = {
  variants: [
    {
      props: { variant: 'PRIMARY' as VariantType },
      style: {
        position: 'relative' as const,
        borderRadius: '100px',
        color: '#000000',
        backgroundColor: '#DBDDFF',
        padding: '0 4px',
        '&:hover': {
          backgroundColor: '#A9ABD1',
        },
        '&:active': {
          border: '1px solid #A9ABD1',
          backgroundColor: '#DBDDFF',
        },
        '&:focus': {
          outline: 'none !important',
          border: '1px solid #DBDDFF',
        },
        '&:focus::before': {
          content: `""`,
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          bottom: '-5px',
          left: '-5px',
          border: '2px solid #FFBE45',
          borderRadius: '101px',
        },
        '&:focus:not(:focus-visible)': { position: 'relative', border: 'none' },
        '&:focus:not(:focus-visible)::before': {
          position: 'relative',
          border: 'none',
          content: 'none',
        },
        '&:focus-visible::before': {
          content: `""`,
          position: 'absolute' as const,
          top: '-5px',
          right: '-5px',
          bottom: '-5px',
          left: '-5px',
          border: '2px solid #FFBE45',
          borderRadius: '101px',
        },
        '&:focus-visible:hover': {
          backgroundColor: '#A9ABD1',
        },
        '&:disabled': {
          backgroundColor: '#E4E4E4',
          color: '#7F7F7F',
        },
      },
    },
    {
      props: { variant: 'SECONDARY' as VariantType },
      style: {
        position: 'relative' as const,
        border: `1px solid #DBDDFF`,
        borderRadius: '100px',
        padding: '0 4px',
        color: '#DBDDFF',
        '&:hover': {
          backgroundColor: '#DBDDFF',
          color: '#4D4D4D',
        },
        '&:active': {
          border: `1px solid #5F618D`,
          color: '#DBDDFF',
        },
        '&:focus': {
          outline: 'none !important',
          color: '#DBDDFF',
        },
        '&:focus::before': {
          content: `""`,
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          bottom: '-5px',
          left: '-5px',
          border: '2px solid #FFBE45',
          borderRadius: '101px',
        },
        '&:focus:not(:focus-visible)': { position: 'relative', border: 'none' },
        '&:focus:not(:focus-visible)::before': {
          position: 'relative',
          border: 'none',
          content: 'none',
        },
        '&:focus-visible': {
          border: '1px solid #DBDDFF',
          color: '#DBDDFF',
        },
        '&:focus-visible::before': {
          content: `""`,
          position: 'absolute' as const,
          top: '-6px',
          right: '-6px',
          bottom: '-6px',
          left: '-6px',
          border: '2px solid #FFBE45',
          borderRadius: '101px',
        },
        '&:hover:focus': {
          backgroundColor: 'inherit',
        },
        '&:focus-visible:hover': {
          backgroundColor: '#DBDDFF',
          color: '#4D4D4D',
        },
        '&:disabled': {
          border: 'none',
          backgroundColor: '#E4E4E4',
          color: '#7F7F7F',
        },
      },
    },
    {
      props: { variant: 'TERTIARY' as VariantType },
      style: {
        position: 'relative' as const,
        color: '#DBDDFF',
        padding: '0 4px',
        borderRadius: '100px',
        '&:hover': {
          backgroundColor: 'inherit',
          borderRadius: '100px',
          textDecoration: 'underline',
        },
        '&:active': {
          textDecoration: 'none',
          border: `1px solid #5F618D`,
          color: '#DBDDFF',
        },
        '&:focus': {
          outline: 'none !important',
          border: '1px solid #DBDDFF',
        },
        '&:focus::before': {
          content: `""`,
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          bottom: '-5px',
          left: '-5px',
          border: '1px solid #FFBE45',
          borderRadius: '101px',
        },
        '&:focus:not(:focus-visible)': { position: 'relative', border: 'none' },
        '&:focus:not(:focus-visible)::before': {
          position: 'relative',
          border: 'none',
          content: 'none',
        },
        '&:focus-visible': {
          border: '1px solid #DBDDFF',
          color: '#DBDDFF',
        },
        '&:focus-visible::before': {
          content: `""`,
          position: 'absolute' as const,
          top: '-6px',
          right: '-6px',
          bottom: '-6px',
          left: '-6px',
          border: '2px solid #FFBE45',
          borderRadius: '101px',
        },
        '&:disabled': {
          border: 'none',
          backgroundColor: '#E4E4E4',
          color: '#7F7F7F',
        },
      },
    },
  ],
};

export { DARK_BUTTON, LIGHT_BUTTON };
