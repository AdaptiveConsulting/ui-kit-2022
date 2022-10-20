import { Box, SvgIcon, Typography, useTheme } from '@mui/material';
import * as React from 'react';

interface Props {
  icon?: React.ElementType;
  title: JSX.Element | string;
}

const TopBar: React.FC<Props> = ({ icon, title }) => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        height: '68px',
        bgcolor: palette.grey['700'],
        display: 'flex',
        alignItems: 'center',
        padding: '0px 1rem',
        justifyContent: 'flex-start',
        color: palette.common.white,
      }}
    >
      {icon && (
        <SvgIcon
          component={icon}
          viewBox="0 0 35 35"
          sx={{ width: '34px', height: '34px' }}
        />
      )}
      <Typography sx={{ color: palette.common.white, marginLeft: '1rem' }}>
        {title}
      </Typography>
    </Box>
  );
};

export default TopBar;
