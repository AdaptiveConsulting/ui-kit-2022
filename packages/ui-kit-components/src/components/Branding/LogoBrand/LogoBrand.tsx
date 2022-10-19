import { useTheme } from '@mui/material/styles';

import { LogoLarge } from '../raw-icons';

interface Props {
  height?: number;
  width?: number;
}

const LogoBrand: React.FC<Props> = ({ height = 150, width = 148 }) => {
  const theme = useTheme();
  const color = theme.palette.logo;

  return <LogoLarge sx={{ color: color, height: height, width: width }} />;
};

export default LogoBrand;
