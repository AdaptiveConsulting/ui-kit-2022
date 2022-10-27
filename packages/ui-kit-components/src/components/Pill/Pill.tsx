import { Chip } from '@mui/material';
import * as React from 'react';

export type PillVariants = 'filled' | 'outlined';

export interface PillProps {
  label: string;
  variant?: any;
  ticker?: boolean;
  disabled?: boolean;
  icon?: JSX.Element;
  rightIcon?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onClickIcon?: React.MouseEventHandler<HTMLElement>;
}

const Pill: React.FC<PillProps> = ({ rightIcon, onClickIcon, ticker, ...props }) => (
  <Chip
    {...props}
    deleteIcon={rightIcon}
    onDelete={onClickIcon}
    sx={{
      ...(ticker && { width: '64px' }),
    }}
  />
);

export default Pill;
