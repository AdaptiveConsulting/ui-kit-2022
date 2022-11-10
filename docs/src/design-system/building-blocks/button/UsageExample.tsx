import { Box, useTheme } from '@mui/material';
import { Button } from '@ui-kit-2022/components';
import { Typography } from '@ui-kit-2022/components';

interface Props {
  hideTitle?: boolean;
}

const UsageExample: React.FC<Props> = ({ hideTitle }) => {
  const { palette } = useTheme();
  const theme = useTheme();

  return (
    <Box>
      {hideTitle ? null : (
        <Box sx={{ marginBottom: '1rem', marginLeft: '1rem' }}>
          <Typography variant="subheader3">
            {palette.mode === 'dark' ? 'Dark' : 'Light'} Background
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          [theme.breakpoints.up('md')]: {
            width: '161px',
          },
          [theme.breakpoints.down('md')]: {
            maxWidth: '161px',
          },
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
