import { Box, Divider, useMediaQuery, useTheme } from '@mui/material';
import { IndexTickers } from '@ui-kit-2022/components';
const StockPriceFooter = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery('(max-width: 440px)');
  return (
    <>
      <Box>
        <Divider orientation="horizontal" sx={{ width: '100%' }} />
      </Box>
      <Box
        py={2}
        width={'100%'}
        display={'flex'}
        justifyContent={matches ? 'flex-start' : 'center'}
      >
        <IndexTickers
          includeDivider={false}
          name={'SPA'}
          latestPrice={333.98}
          changedPrice={-2.97}
          percentage={-0.9}
        />
        <IndexTickers
          name={'DIA'}
          latestPrice={290.12}
          changedPrice={1.67}
          percentage={0.64}
        />
        <IndexTickers
          includeDivider={false}
          name={'IWM'}
          latestPrice={167.45}
          changedPrice={0.0}
          percentage={0.0}
        />
      </Box>
    </>
  );
};

export default StockPriceFooter;
