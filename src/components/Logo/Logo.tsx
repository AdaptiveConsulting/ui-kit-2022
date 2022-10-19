import { SvgIcon } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { LogoLarge, LogoMaximized, LogoSmall } from '.';

interface Props {
  variant?: string;
}

const Logo: React.FC<Props> = (svgProps) => {
  const theme = useTheme();
  const color = theme.palette.mode === 'dark' ? theme.palette.common.white : '#323232';

  const dimensions = { height: 32, width: 32 };
  let icon = LogoSmall;

  switch (svgProps.variant) {
    case 'maximized':
      icon = LogoMaximized;
      dimensions.width = 154;
      dimensions.height = 53;
      break;
    case 'large':
      icon = LogoLarge;
      dimensions.width = 56;
      dimensions.height = 53;
      break;
  }

  return <SvgIcon inheritViewBox component={icon} sx={{ color: color, ...dimensions }} />;
};

export default Logo;
