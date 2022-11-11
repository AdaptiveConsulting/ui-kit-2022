import { Toolbar, Typography, useTheme } from '@mui/material';
import { LogoBrand } from '@ui-kit-2022/components';
import * as React from 'react';

interface Props {
  title: JSX.Element | string;
}

const TopBar: React.FC<Props> = ({ title }) => {
  const { palette } = useTheme();
  return (
    <Toolbar
      sx={{
        backgroundColor: {
          dark: palette.grey['800'],
          light: palette.grey['200'],
        }[palette.mode],
      }}
    >
      <LogoBrand width={34} height={34} />
      <Typography variant="h4" ml={2}>
        {title}
      </Typography>
    </Toolbar>
  );
};

export default TopBar;
