import { Button, SvgIcon } from '@mui/material';
import * as React from 'react';

import { ArrowLeft, ArrowRight } from '../../icons';
type VariantType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

interface Props {
  children?: JSX.Element | string;
  variant?: VariantType;
  disabled?: boolean;
  icon?: 'left' | 'right';
  click?: () => void;
  id?: string;
}

const ButtonDefault: React.FC<Props> = ({
  variant = 'PRIMARY',
  disabled = false,
  children = '',
  icon,
  click,
  id,
}) => {
  if (icon === 'left') {
    return (
      <Button
        disableRipple
        variant={variant}
        disabled={disabled}
        onClick={click}
        id={id}
        startIcon={
          <SvgIcon
            component={ArrowLeft}
            viewBox="-3 0 16 16"
            sx={{ width: '16px', height: '16px' }}
          />
        }
        sx={{ '& .MuiButton-startIcon': { mr: '4px' } }}
      >
        {children}
      </Button>
    );
  } else if (icon === 'right') {
    return (
      <Button
        disableRipple
        variant={variant}
        disabled={disabled}
        onClick={click}
        id={id}
        endIcon={
          <SvgIcon
            component={ArrowRight}
            viewBox="3 0 16 16"
            sx={{ width: '16px', height: '16px' }}
          />
        }
        sx={{ '& .MuiButton-endIcon': { ml: '4px' } }}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button disableRipple variant={variant} disabled={disabled} onClick={click} id={id}>
      {children}
    </Button>
  );
};

export default ButtonDefault;
