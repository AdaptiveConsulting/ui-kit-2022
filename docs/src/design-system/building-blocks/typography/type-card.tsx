import { Card, CardContent, styled, Typography } from '@mui/material';
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
  background-color: #555555;
`;

const TypeCard: React.FC<TypeCardProps> = ({ title, letter, fontFamily, fontWeight }) => {
  return (
    <StyledCard fontFamily={fontFamily}>
      <CardContent>
        <Typography sx={{ fontSize: '12px', color: '#BBBBBB' }}>{title}</Typography>
        <Typography
          component="div"
          sx={{
            fontSize: '50px',
            color: '#FFFFFF',
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
