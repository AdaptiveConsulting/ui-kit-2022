import { css } from '@emotion/css';

import LogoIcon from '../LogoIcon/LogoIcon';
import LogoText from '../LogoText/LogoText';

interface Props {
  color?: string;
  textHeight?: number;
  textWidth?: number;
  iconHeight?: number;
  iconWidth?: number;
  gap?: number;
}

const MaximizedLogoIcon: React.FC<Props> = ({
  textHeight = 32,
  iconHeight = 56,
  textWidth = 97,
  iconWidth = 55,
  gap = 8,
  color = '#323232',
}) => (
  <div
    className={css`
      display: flex;
      align-items: center;
      gap: ${gap}px;
    `}
  >
    <LogoIcon height={iconHeight} width={iconWidth} color={color} />
    <LogoText height={textHeight} width={textWidth} color={color} />
  </div>
);

export default MaximizedLogoIcon;
