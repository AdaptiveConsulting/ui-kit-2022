import { Box, useTheme } from '@mui/material';

import IndexTickerMobile from './IndexTickerMobile';

const TickerBarMobile: React.FC = () => {
  const { palette } = useTheme();
  return (
    <Box
      pt={2}
      borderTop={1}
      width={'100%'}
      borderColor={palette.divider}
      display={'flex'}
      justifyContent={'center'}
    >
      <IndexTickerMobile
        includeDivider={false}
        name={'SPA'}
        latestPrice={333.98}
        changedPrice={-2.97}
        percentage={-0.9}
      />
      <IndexTickerMobile
        name={'DIA'}
        latestPrice={290.12}
        changedPrice={1.67}
        percentage={0.64}
      />
      <IndexTickerMobile
        includeDivider={false}
        name={'IWM'}
        latestPrice={167.45}
        changedPrice={0.0}
        percentage={0.0}
      />
    </Box>
  );
};

export default TickerBarMobile;
