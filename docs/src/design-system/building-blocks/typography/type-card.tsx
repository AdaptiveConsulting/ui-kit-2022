import { Card, CardContent, styled, Typography, useTheme } from '@mui/material';
import * as React from 'react';

export interface TypeCardProps {
  title: string;
  letter: string;
  fontFamily: string;
  fontWeight: string;
}

type StyledCardProps = Pick<TypeCardProps, 'fontFamily'>;

const StyledCard = styled(Card)<StyledCardProps>`
  width: 132px;
  height: 125px;
`;

const TypeCard: React.FC<TypeCardProps> = ({ title, letter, fontFamily, fontWeight }) => {
  const { palette } = useTheme();
  return (
    <StyledCard
      fontFamily={fontFamily}
      sx={{
        backgroundColor: { dark: palette.grey.A700, light: palette.grey.A200 }[
          palette.mode
        ],
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: '12px', color: '#BBBBBB' }}>{title}</Typography>
        <Typography
          component="div"
          sx={{
            fontSize: '50px',
            textAlign: 'center',
            fontWeight: `${fontWeight}`,
            fontFamily: `${fontFamily}`,
            fontStyle: `${title === 'LIGHT ITALIC' ? 'italic' : 'normal'}`,
          }}
        >
          {letter}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default TypeCard;
