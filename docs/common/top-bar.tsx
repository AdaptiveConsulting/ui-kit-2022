import { Box, SvgIcon, Typography } from '@mui/material';
import * as React from 'react';

interface Props {
  icon?: React.ElementType;
  title: JSX.Element | string;
}

const TopBar: React.FC<Props> = ({ icon, title }) => {
  return (
    <Box
      sx={{
        height: '68px',
        bgcolor: '#555555',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 1rem',
        justifyContent: 'flex-start',
        color: '#FFFFFF',
      }}
    >
      {icon && (
        <SvgIcon
          component={icon}
          viewBox="0 0 35 35"
          sx={{ width: '34px', height: '34px' }}
        />
      )}
      <Typography sx={{ color: '#FFFFFF', marginLeft: '1rem' }}>{title}</Typography>
    </Box>
  );
};

export default TopBar;
