import { useTheme } from '@mui/material';

import { darkLogoColor, lightLogoColor, LogoText as Logo_Text } from '../branding';

interface Props {
  height?: number;
  width?: number;
}

const LogoText: React.FC<Props> = ({ height = 90, width = 272 }) => {
  const theme = useTheme();
  const color = theme.palette.mode === 'dark' ? lightLogoColor : darkLogoColor;

  return <Logo_Text sx={{ color: color, height: height, width: width }} />;
};

export default LogoText;
