import { SvgIcon } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { LogoLarge } from '../';

interface Props {
  height?: number;
  width?: number;
}

const LogoBrand: React.FC<Props> = ({ height = 150, width = 148 }) => {
  const theme = useTheme();
  const color = theme.palette.mode === 'dark' ? theme.palette.common.white : '#323232';

  return (
    <SvgIcon
      inheritViewBox
      component={LogoLarge}
      sx={{ color: color, height: height, width: width }}
    />
  );
};

export default LogoBrand;
