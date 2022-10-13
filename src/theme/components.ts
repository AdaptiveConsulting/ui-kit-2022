type VariantType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

const COMPONENTS = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'PRIMARY' as VariantType },
        style: {
          border: `4px`,
          borderRadius: '100px',
          color: '#FFFFFF',
          backgroundColor: '#AAABD1',
          fontSize: '11px',
          padding: '4px 4px',
          '&:hover': {
            backgroundColor: '#6B6B8E',
          },
          '&:active': {
            border: '1px solid #6B6B8E',
          },
          '&:focus': {
            border: '2px solid #FFFFFF',
            outline: '3px solid #FF8D00',
          },
        },
      },
      {
        props: { variant: 'SECONDARY' as VariantType },
        style: {
          border: `15px`,
          borderRadius: '15px',
        },
      },
      {
        props: { variant: 'TERTIARY' as VariantType },
        style: {
          border: '15px',
          borderRadius: '15px',
        },
      },
    ],
  },
};

export default COMPONENTS;
