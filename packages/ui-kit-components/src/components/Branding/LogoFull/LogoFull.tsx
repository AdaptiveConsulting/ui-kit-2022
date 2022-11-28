import { useTheme } from '@mui/material';

import { darkLogoColor, lightLogoColor, LogoFull as Logo_Full } from '../branding';

export interface Props {
  height?: number;
  width?: number;
}

const LogoFull: React.FC<Props> = ({ height, width }) => {
  const theme = useTheme();
  const color = theme.palette.mode === 'dark' ? lightLogoColor : darkLogoColor;

  return <Logo_Full sx={{ color: color, height: height, width: width }} />;
};

export default LogoFull;
