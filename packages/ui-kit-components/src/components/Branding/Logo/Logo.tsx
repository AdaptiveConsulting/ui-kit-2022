import { useTheme } from '@mui/material';

import {
  darkLogoColor,
  lightLogoColor,
  LogoLarge,
  LogoMaximized,
  LogoSmall,
} from '../branding';

interface Props {
  variant?: string;
  color?: string;
}

const Logo: React.FC<Props> = (svgProps) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark' ? true : false;
  const color = svgProps.color
    ? svgProps.color
    : isDarkMode
    ? lightLogoColor
    : darkLogoColor;

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
