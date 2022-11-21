import { useTheme } from '@mui/material';

import { darkLogoColor, lightLogoColor, LogoFull as Logo_Full } from '../branding';

//Discuss how resizing should work for this component
interface Props {
  height?: number;
  width?: number;
}

const LogoFull: React.FC<Props> = () => {
  const theme = useTheme();
  const color = theme.palette.mode === 'dark' ? lightLogoColor : darkLogoColor;

  return <Logo_Full sx={{ color: color }} />;
};

export default LogoFull;
