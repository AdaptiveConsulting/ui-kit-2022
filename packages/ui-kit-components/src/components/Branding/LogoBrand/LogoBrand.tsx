import { useTheme } from '@mui/material';

import { darkLogoColor, lightLogoColor, LogoLarge } from '../branding';

interface Props {
  height?: number;
  width?: number;
}

const LogoBrand: React.FC<Props> = ({ height = 150, width = 148 }) => {
  const theme = useTheme();
  const color = theme.palette.mode === 'dark' ? lightLogoColor : darkLogoColor;

  return <LogoLarge sx={{ color: color, height: height, width: width }} />;
};

export default LogoBrand;
