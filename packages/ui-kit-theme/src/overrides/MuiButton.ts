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
        borderRadius: '100px',
        color: '#000000',
        backgroundColor: '#DBDDFF',
        padding: '0px 4px',
        '&:hover': {
          backgroundColor: '#A9ABD1',
        },
        '&:active': {
          border: '1px solid #A9ABD1',
          backgroundColor: '#DBDDFF',
        },
        '&:focus': {
          outline: 'none',
        },
        '&:focus-visible': {
          border: '2px solid inherit',
          outline: '3px solid #FF8D00',
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
        border: `1px solid #5F618D`,
        borderRadius: '100px',
        padding: '0px 4px',
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
        '&:focus-visible': {
          border: '1px solid #5F618D',
          outlineOffset: '2px',
          outline: '3px solid #FF8D00',
          color: '#5F618D',
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
        padding: '0px 4px',
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
        },
        '&:focus-visible': {
          border: '1px solid #5F618D',
          outlineOffset: '2px',
          outline: '3px solid #FF8D00',
          textDecoration: 'none',
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
        borderRadius: '100px',
        color: '#000000',
        backgroundColor: '#DBDDFF',
        padding: '0px 4px',
        '&:hover': {
          backgroundColor: '#A9ABD1',
        },
        '&:active': {
          border: '1px solid #A9ABD1',
          backgroundColor: '#DBDDFF',
        },
        '&:focus': {
          outline: 'none',
        },
        '&:focus-visible': {
          border: '2px solid inherit',
          outline: '3px solid #FF8D00',
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
        border: `1px solid #DBDDFF`,
        borderRadius: '100px',
        padding: '0px 4px',
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
          outline: 'none',
          color: '#DBDDFF',
        },
        '&:focus-visible': {
          border: '1px solid #DBDDFF',
          outlineOffset: '2px',
          outline: '3px solid #FFBE45',
          color: '#DBDDFF',
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
        color: '#DBDDFF',
        padding: '0px 4px',
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
          outline: 'none',
        },
        '&:focus-visible': {
          border: '1px solid #DBDDFF',
          outlineOffset: '2px',
          outline: '3px solid #FFBE45',
          color: '#DBDDFF',
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
