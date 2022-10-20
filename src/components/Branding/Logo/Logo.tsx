import { useTheme } from '@mui/material/styles';

import { LogoLarge, LogoMaximized, LogoSmall } from '../raw-icons';

interface Props {
  variant?: string;
}

const Logo: React.FC<Props> = (svgProps) => {
  const theme = useTheme();
  const color = theme.palette.logo;

  switch (svgProps.variant) {
    case 'maximized':
      return <LogoMaximized sx={{ color: color, height: 53, width: 154 }} />;
      break;
    case 'large':
      return <LogoLarge sx={{ color: color, height: 53, width: 56 }} />;
    default:
      return <LogoSmall sx={{ color: color, height: 32, width: 32 }} />;
  }
};

export default Logo;
