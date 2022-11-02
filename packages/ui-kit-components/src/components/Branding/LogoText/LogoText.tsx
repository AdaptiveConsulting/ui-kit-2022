import { useTheme } from '@mui/material';

import { darkLogoColor, lightLogoColor, LogoText as Logo_Text } from '../branding';

interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const LogoText: React.FC<Props> = ({ height = 90, width = 272, color }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark' ? true : false;
  const logoColor = color ? color : isDarkMode ? lightLogoColor : darkLogoColor;

  return <Logo_Text sx={{ color: logoColor, height: height, width: width }} />;
};

export default LogoText;
