type VariantType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

const COMPONENTS = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'PRIMARY' as VariantType },
        style: {
          border: `15px`,
        },
      },
      {
        props: { variant: 'SECONDARY' as VariantType },
        style: {
          border: `15px`,
        },
      },
      {
        props: { variant: 'TERTIARY' as VariantType },
        style: {
          border: '15px',
        },
      },
    ],
  },
};

export default COMPONENTS;
