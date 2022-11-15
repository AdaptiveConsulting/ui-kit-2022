import { Box, Divider, ThemeProvider, useTheme } from '@mui/material';
import { Typography } from '@ui-kit-2022/components';
import { dark, light } from '@ui-kit-2022/theme';

const ChartDividerExample = () => {
  const { palette } = useTheme();
  return (
    <ThemeProvider theme={palette.mode === 'light' ? dark : light}>
      <Box
        p={3}
        sx={{ width: '160px' }}
        bgcolor={
          palette.mode === 'light'
            ? dark.palette.background.paper
            : light.palette.background.paper
        }
        color={
          palette.mode === 'light'
            ? dark.palette.text.primary
            : light.palette.text.primary
        }
      >
        <Box display={'flex'}>
          <Box display={'flex'} flexDirection={'column'} mr={1}>
            <Typography variant="caption" sx={{ mt: 4, mb: 5 }}>
              75%
            </Typography>
            <Typography variant="caption" sx={{ mb: 5 }}>
              50%
            </Typography>
            <Typography variant="caption">25%</Typography>
          </Box>
          <Box borderLeft={1} borderBottom={1} width={'100px'} position="relative">
            <Divider sx={{ mb: '41px', mt: 5 }} />
            <Divider />
            <Box
              sx={{
                borderTop: `1px dashed ${palette.primary.main}`,
                mt: '15px',
                mb: '25px',
              }}
            />
            <Box
              sx={{
                borderTop: `1px solid ${palette.primary.main}`,
                width: '140px',
                rotate: '136deg',
                translate: '-20px -6px',
              }}
            />
            <Divider sx={{ mb: '41px' }} />
            <Box
              sx={{
                width: '5px',
                height: '5px',
                borderTop: `1px solid ${palette.primary.main}`,
                borderRight: `1px solid ${palette.primary.main}`,
                position: 'absolute',
                left: '96px',
                bottom: '93px',
              }}
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ ml: '4rem', mt: 2 }}>
            Time
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default ChartDividerExample;
