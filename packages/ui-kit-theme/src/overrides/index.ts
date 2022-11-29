import MuiAutocomplete from './MuiAutocomplete';
import { DARK_BUTTON, LIGHT_BUTTON } from './MuiButton';
import MuiButtonBase from './MuiButtonBase';
import MuiChip from './MuiChip';
import MuiDivider from './MuiDivider';
import MuiInputBase from './MuiInputBase';
import MuiLinearProgress from './MuiLinearProgress';
import MuiTable from './MuiTable';

// Component overrides
export const LIGHT_COMPONENTS = {
  MuiButtonBase,
  MuiDivider,
  MuiChip,
  MuiButton: LIGHT_BUTTON,
  MuiTable,
  MuiInputBase,
  MuiAutocomplete,
  MuiLinearProgress,
};

export const DARK_COMPONENTS = {
  MuiButtonBase,
  MuiDivider,
  MuiChip,
  MuiButton: DARK_BUTTON,
  MuiTable,
  MuiInputBase,
  MuiAutocomplete,
  MuiLinearProgress,
};
