import { Button } from '@mui/material';
import * as React from 'react';

type VariantType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

interface Props {
  children: JSX.Element;
  variant: VariantType;
}

const ButtonDefault: React.FC<Props> = ({ variant = 'PRIMARY', children }) => {
  return (
    <Button variant={variant} color="error" sx={{ borderRadius: '1rem' }}>
      {children}
    </Button>
  );
};

export default ButtonDefault;
