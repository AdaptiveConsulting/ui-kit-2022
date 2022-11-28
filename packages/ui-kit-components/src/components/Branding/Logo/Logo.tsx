import { useTheme } from '@mui/material';

import {
  darkLogoColor,
  lightLogoColor,
  LogoLarge,
  LogoMaximized,
  LogoSmall,
} from '../branding';

export interface Props {
  variant?: string;
}

const Logo: React.FC<Props> = (svgProps) => {
  const theme = useTheme();
  const color = theme.palette.mode === 'dark' ? lightLogoColor : darkLogoColor;

  switch (svgProps.variant) {
    case 'maximized':
      return <LogoMaximized sx={{ color: color, height: 53, width: 154 }} />;
    case 'large':
      return <LogoLarge sx={{ color: color, height: 53, width: 56 }} />;
    default:
      return <LogoSmall sx={{ color: color, height: 32, width: 32 }} />;
  }
};

export default Logo;
