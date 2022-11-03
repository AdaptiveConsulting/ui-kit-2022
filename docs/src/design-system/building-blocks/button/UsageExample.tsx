import { Box, useTheme } from '@mui/material';
import { Button } from '@ui-kit-2022/components';
import { Typography } from '@ui-kit-2022/components';

const UsageExample: React.FC = () => {
  const { palette } = useTheme();

  return (
    <Box>
      <Box sx={{ marginBottom: '1rem', marginLeft: '1rem' }}>
        <Typography variant="subheader3">
          {palette.mode === 'dark' ? 'Dark' : 'Light'} Background
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '161px',
          height: '174px',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: {
            dark: palette.grey[900],
            light: palette.grey[50],
          }[palette.mode],
        }}
      >
        <Button variant="PRIMARY">BUTTON TEXT</Button>
        <Button variant="SECONDARY">BUTTON TEXT</Button>
        <Button variant="TERTIARY">BUTTON TEXT</Button>
      </Box>
    </Box>
  );
};

export default UsageExample;
