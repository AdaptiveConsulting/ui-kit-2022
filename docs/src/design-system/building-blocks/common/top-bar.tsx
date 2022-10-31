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
        backgroundColor: { dark: palette.grey['700'], light: palette.grey['200'] }[
          palette.mode
        ],
        display: 'flex',
        alignItems: 'center',
        padding: '0px 1rem',
        justifyContent: 'flex-start',
      }}
    >
      {icon && (
        <SvgIcon
          component={icon}
          viewBox="0 0 35 35"
          sx={{ width: '34px', height: '34px' }}
        />
      )}
      <Typography variant="h1" sx={{ marginLeft: '1rem' }}>
        {title}
      </Typography>
    </Box>
  );
};

export default TopBar;
