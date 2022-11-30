import { Box, Grid } from '@mui/material';

import AppBar from './components/AppBar';
import Sidebar from './components/Sidebar';
import StockPriceFooter from './components/StockPriceFooter';

export default function ExamplePage() {
  return (
    <Grid container columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}>
      <Grid item xs={12} md={1}>
        <AppBar />
      </Grid>
      <Grid item md={8}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          height={'100vh'}
          justifyContent={'flex-end'}
        >
          <Box></Box>
          <Box>
            <StockPriceFooter />
          </Box>
        </Box>
      </Grid>
      <Grid item md={3}>
        <Sidebar />
      </Grid>
    </Grid>
  );
}
