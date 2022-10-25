import { ThemeProvider } from '@emotion/react';
import { Box, useTheme } from '@mui/material';
import { Button } from '@ui-kit-2022/components';
import { Typography } from '@ui-kit-2022/components';
import { dark } from '@ui-kit-2022/theme';

interface Props {
  title?: 'Dark' | 'Light';
}

const UsageExample: React.FC<Props> = ({ title }) => {
  const theme = useTheme();
  const ButtonGroup = () => {
    if (title === 'Dark') {
      return (
        <ThemeProvider theme={dark}>
          <Button variant="PRIMARY">BUTTON TEXT</Button>
          <Button variant="SECONDARY">BUTTON TEXT</Button>
          <Button variant="TERTIARY">BUTTON TEXT</Button>
        </ThemeProvider>
      );
    } else {
      return (
        <>
          <Button variant="PRIMARY">BUTTON TEXT</Button>
          <Button variant="SECONDARY">BUTTON TEXT</Button>
          <Button variant="TERTIARY">BUTTON TEXT</Button>
        </>
      );
    }
  };
  return (
    <Box>
      <Box
        sx={{ marginBottom: '1rem', marginLeft: '1rem', color: theme.palette.grey[50] }}
      >
        <Typography variant="subheader3">{title} Background </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '161px',
          height: '174px',
          backgroundColor:
            title === 'Dark' ? theme.palette.grey[900] : theme.palette.grey[50],
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <ButtonGroup />
      </Box>
    </Box>
  );
};

export default UsageExample;
