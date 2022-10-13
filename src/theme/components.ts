type VariantType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

const LIGHT_COMPONENTS = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'PRIMARY' as VariantType },
        style: {
          border: `4px`,
          borderRadius: '100px',
          color: '#000000',
          backgroundColor: '#AAABD1',
          fontSize: '11px',
          padding: '0px 3px',
          '&:hover': {
            backgroundColor: '#6B6B8E',
          },
          '&:active': {
            border: '1px solid #6B6B8E',
            backgroundColor: '#AAABD1',
          },
          '&:focus': {
            border: '2px solid #FFFFFF',
            outline: '3px solid #FF8D00',
            backgroundColor: '#AAABD1',
          },
          '&:disabled': {
            backgroundColor: '#E4E4E4',
          },
        },
      },
    ],
  },
};

const DARK_COMPONENTS = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'SECONDARY' as VariantType },
        style: {
          border: `15px`,
          color: 'orange',
          borderRadius: '15px',
        },
      },
      {
        props: { variant: 'TERTIARY' as VariantType },
        style: {
          border: '15px',
          color: '#000000',
          borderRadius: '15px',
        },
      },
    ],
  },
};

export { DARK_COMPONENTS, LIGHT_COMPONENTS };
