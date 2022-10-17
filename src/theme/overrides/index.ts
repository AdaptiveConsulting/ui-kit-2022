import { DARK_BUTTON, LIGHT_BUTTON } from './MuiButton';
import MuiDivider from './MuiDivider';
// Component overrides
export const LIGHT_COMPONENTS = {
  MuiDivider,
  MuiButton: LIGHT_BUTTON,
};

export const DARK_COMPONENTS = {
  MuiDivider,
  MuiButton: DARK_BUTTON,
};
