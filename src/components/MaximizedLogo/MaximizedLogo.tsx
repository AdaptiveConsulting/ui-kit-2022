import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';

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

const Container = styled.div((props: { gap: number }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: `${props.gap}px`,
}));

const MaximizedLogoIcon: React.FC<Props> = ({
  textHeight = 32,
  iconHeight = 56,
  textWidth = 97,
  iconWidth = 55,
  gap = 8,
  color = useTheme().palette.mode === 'dark' ? '#fff' : '#323232',
}) => (
  <Container gap={gap}>
    <LogoIcon height={iconHeight} width={iconWidth} color={color} />
    <LogoText height={textHeight} width={textWidth} color={color} />
  </Container>
);

export default MaximizedLogoIcon;
