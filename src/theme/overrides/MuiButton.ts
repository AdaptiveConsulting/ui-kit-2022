type VariantType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

const LIGHT_BUTTON = {
  variants: [
    {
      props: { variant: 'PRIMARY' as VariantType },
      style: {
        borderRadius: '100px',
        color: '#000000',
        backgroundColor: '#DBDDFF',
        padding: '0px 3px',
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
        padding: '0px 3px',
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
          backgroundColor: '#E4E4E4',
        },
      },
    },
    {
      props: { variant: 'TERTIARY' as VariantType },
      style: {
        padding: '0px 3px',
        color: '#5F618D',
        '&:hover': {
          backgroundColor: '#FFFFFF',
          textDecoration: 'underline',
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
          backgroundColor: '#E4E4E4',
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
        padding: '0px 3px',
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
        border: `1px solid #DBDDFF`,
        borderRadius: '100px',
        padding: '0px 3px',
        color: '#DBDDFF',
        backgroundColor: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#DBDDFF',
          color: '#4D4D4D',
        },
        '&:active': {
          border: `1px solid #5F618D`,
          backgroundColor: '#FFFFFF',
          color: '#DBDDFF',
        },
        '&:focus': {
          padding: '2px 5px',
          border: '2px solid #FF8D00',
          outlineOffset: '-5px',
          outline: '2px solid #DBDDFF',
          backgroundColor: '#FFFFFF',
          color: '#DBDDFF',
        },
        '&:disabled': {
          backgroundColor: '#E4E4E4',
        },
      },
    },
    {
      props: { variant: 'TERTIARY' as VariantType },
      style: {
        color: '#DBDDFF',
        padding: '0px 3px',
        '&:hover': {
          backgroundColor: 'inherit',
          textDecoration: 'underline',
        },
        '&:focus': {
          padding: '2px 5px',
          borderRadius: '100px',
          border: '2px solid #FF8D00',
          outlineOffset: '-5px',
          outline: '2px solid #DBDDFF',
          backgroundColor: '#FFFFFF',
          color: '#DBDDFF',
        },
        '&:active': {
          borderRadius: '100px',
          textDecoration: 'none',
          border: `1px solid #5F618D`,
          backgroundColor: '#FFFFFF',
          color: '#DBDDFF',
        },
        '&:disabled': {
          backgroundColor: '#E4E4E4',
        },
      },
    },
  ],
};

export { DARK_BUTTON, LIGHT_BUTTON };
