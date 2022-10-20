import { useTheme } from '@mui/material/styles';

import { LogoText as Logo_Text } from '../raw-icons';

interface Props {
  height?: number;
  width?: number;
}

const LogoText: React.FC<Props> = ({ height = 90, width = 272 }) => {
  const theme = useTheme();
  const color = theme.palette.logo;

  return <Logo_Text sx={{ color: color, height: height, width: width }} />;
};

export default LogoText;
