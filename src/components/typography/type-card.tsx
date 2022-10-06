import { Card, CardContent, styled, Typography } from '@mui/material';
import * as React from 'react';

interface Props {
  title: string;
  letter: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
}

type StyledCardProps = Pick<Props, 'fontFamily'>;

const StyledCard = styled(Card)<StyledCardProps>`
  width: 132px;
  height: 125px;
  background-color: #555555;
`;

export default function TypeCard(props: Props) {
  return (
    <StyledCard fontFamily={props.fontFamily}>
      <CardContent>
        <Typography sx={{ fontSize: '12px', color: '#BBBBBB' }}>{props.title}</Typography>
        <Typography
          component="div"
          sx={{
            fontSize: '50px',
            color: '#FFFFFF',
            textAlign: 'center',
            fontWeight: `${props.fontWeight}`,
            fontFamily: `${props.fontFamily}`,
            fontStyle: `${props.fontStyle}`,
          }}
        >
          {props.letter}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}
