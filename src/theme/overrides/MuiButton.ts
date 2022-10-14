type VariantType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

const LIGHT_BUTTON = {
  variants: [
    {
      props: { variant: 'PRIMARY' as VariantType },
      style: {
        borderRadius: '100px',
        color: '#000000',
        backgroundColor: '#DBDDFF',
        padding: '0px 2px',
        '&:hover': {
          backgroundColor: '#A9ABD1',
        },
        '&:active': {
          border: '1px solid #A9ABD1',
          backgroundColor: '#DBDDFF',
        },
        '&:focus': {
          border: '2px solid #FFFFFF',
          outline: '3px solid #FF8D00',
          backgroundColor: '#DBDDFF',
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
        padding: '0px 2px',
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
          border: '1px solid #5F618D',
          outlineOffset: '2px',
          outline: '2px solid #FF8D00',
          backgroundColor: '#FFFFFF',
          color: '#5F618D',
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
        padding: '0px 2px',
        color: '#5F618D',
        '&:hover': {
          backgroundColor: '#FFFFFF',
          textDecoration: 'underline',
        },
        '&:active': {
          border: `1px solid #5F618D`,
          backgroundColor: '#FFFFFF',
          color: '#5F618D',
        },
        '&:focus': {
          border: '1px solid #5F618D',
          borderRadius: '100px',
          outlineOffset: '2px',
          outline: '2px solid #FF8D00',
          backgroundColor: '#FFFFFF',
          textDecoration: 'none',
        },
        '&:disabled': {
          borderRadius: '100px',
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
        padding: '0px 2px',
        '&:hover': {
          backgroundColor: '#A9ABD1',
        },
        '&:active': {
          border: '1px solid #A9ABD1',
          backgroundColor: '#DBDDFF',
        },
        '&:focus': {
          outlineOffset: '2px',
          outline: '2px solid #FF8D00',
          border: '0px',
          backgroundColor: '#DBDDFF',
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
        padding: '0px 2px',
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
          padding: '2px 5px',
          border: '2px solid #FFBE45',
          outlineOffset: '-6px',
          outline: '2px solid #DBDDFF',
          color: '#DBDDFF',
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
        padding: '0px 2px',
        borderRadius: '100px',
        '&:hover': {
          backgroundColor: 'inherit',
          borderRadius: '100px',
          textDecoration: 'underline',
        },
        '&:focus': {
          padding: '2px 5px',
          borderRadius: '100px',
          border: '2px solid #FFBE45',
          outlineOffset: '-6px',
          outline: '2px solid #DBDDFF',
          color: '#DBDDFF',
        },
        '&:active': {
          borderRadius: '100px',
          textDecoration: 'none',
          border: `1px solid #5F618D`,
          color: '#DBDDFF',
        },
        '&:disabled': {
          borderRadius: '100px',
          border: 'none',
          backgroundColor: '#E4E4E4',
          color: '#7F7F7F',
        },
      },
    },
  ],
};

export { DARK_BUTTON, LIGHT_BUTTON };
