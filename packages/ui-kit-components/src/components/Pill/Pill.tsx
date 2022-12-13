import { Chip, SxProps } from '@mui/material';
import * as React from 'react';

export type PillVariants = 'filled' | 'outlined';
export type PillColors =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

export interface PillProps {
  label: string;
  variant?: PillVariants;
  color?: PillColors;
  ticker?: boolean;
  disabled?: boolean;
  icon?: JSX.Element;
  rightIcon?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onClickIcon?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  sx?: SxProps;
}

const Pill: React.FC<PillProps> = ({
  color = 'primary',
  rightIcon,
  onClickIcon,
  ticker,
  sx,
  ...props
}) => (
  <Chip
    {...props}
    color={color}
    deleteIcon={rightIcon}
    onDelete={onClickIcon}
    sx={{
      ...(ticker && { width: '64px' }),
      ...sx,
    }}
    data-testid={'pill'}
  />
);

export default Pill;
