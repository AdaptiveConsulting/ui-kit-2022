import { Box, useTheme } from '@mui/material';
import { Divider } from '@mui/material';
import { Icon, Typography } from '@ui-kit-2022/components';

const IndexDividerExample = () => {
  const { palette } = useTheme();
  return (
    <Box
      height={'35px'}
      p={2}
      bgcolor={palette.common.black}
      display="flex"
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box display={'flex'} justifyContent="space-between">
        <Box display={'flex'}>
          <Typography variant="body2" mr={1}>
            SPY
          </Typography>
          <Typography variant="body2" color={palette.grey[800]}>
            $333.998
          </Typography>
        </Box>
        <Box display={'flex'}>
          <Icon.ArrowDown
            viewBox="2 2 10 10"
            sx={{ width: '10px', height: '10px', color: palette.error.main }}
          />
          <Typography variant="body2" color={palette.error.main}>
            -2.97 | -0.90%
          </Typography>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box></Box>
      <Divider orientation="vertical" flexItem />
      <Box></Box>
    </Box>
  );
};
export default IndexDividerExample;
