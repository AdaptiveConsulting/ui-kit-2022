import { DARK_BUTTON, LIGHT_BUTTON } from './MuiButton';
import MuiButtonBase from './MuiButtonBase';
import MuiChip from './MuiChip';
import MuiDivider from './MuiDivider';

// Component overrides
export const LIGHT_COMPONENTS = {
  MuiButtonBase,
  MuiDivider,
  MuiChip,
  MuiButton: LIGHT_BUTTON,
};

export const DARK_COMPONENTS = {
  MuiButtonBase,
  MuiDivider,
  MuiChip,
  MuiButton: DARK_BUTTON,
};
