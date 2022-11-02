import { useTheme } from '@mui/material';

import { darkLogoColor, lightLogoColor, LogoLarge } from '../branding';

interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const LogoBrand: React.FC<Props> = ({ height = 150, width = 148, color }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark' ? true : false;
  const logoColor = color ? color : isDarkMode ? lightLogoColor : darkLogoColor;

  return <LogoLarge sx={{ color: logoColor, height: height, width: width }} />;
};

export default LogoBrand;
