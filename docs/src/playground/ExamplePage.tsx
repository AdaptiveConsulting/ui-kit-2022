import { Box, Button, ButtonGroup, Divider, Theme, Typography } from '@mui/material';
import { Graph, Icon } from '@ui-kit-2022/components';

import AppBar from './components/AppBar';
import KeyStatistics from './components/KeyStatistics';
import Sidebar from './components/Sidebar';
import StockPriceFooter from './components/StockPriceFooter';

const keyStats = {
  open: '-',
  high: '-',
  low: '-',
  close: '-',
  dayRange: '-',
  yearRange: '-',
  marketCap: '-',
  p2eRatio: '-',
  dividendYield: '-',
  eps: '-',
  volume: '-',
  totalAverageVolume: '-',
};

const styles = {
  footer: ({ palette }: Theme) => ({
    position: 'sticky',
    bottom: 0,
    backgroundColor: { light: 'paper.white', dark: 'paper.black' }[palette.mode],
  }),
  container: ({ breakpoints }: Theme) => ({
    display: 'flex',
    minHeight: '100vh',
    [breakpoints.down('lg')]: {
      flexDirection: 'column',
    },
  }),
  sidebar: ({ breakpoints }: Theme) => ({
    flex: 1,
    overflow: 'hidden',
    [breakpoints.up('md')]: {
      maxWidth: '400px',
    },
  }),
  content: ({ breakpoints }: Theme) => ({
    display: 'flex',
    flex: 1,
    minWidth: 0,
    [breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  }),
};

type PartialNumberType = number | undefined;

export interface ExamplePageProps {
  graphProps: {
    yLabelStep?: number;
    xLabelStep?: number;
    labels: string[];
    data: PartialNumberType[][];
    previousData?: number;
  };
}

export default function ExamplePage({ graphProps }: ExamplePageProps) {
  return (
    <Box sx={styles.container}>
      <Box>
        <AppBar />
      </Box>
      <Box sx={styles.content}>
        <Box flex="2" display="flex" flexDirection="column" px={4} sx={{ minWidth: 0 }}>
          <Box mt={6}>
            <Typography variant="h3" sx={{ p: 2 }}>
              AAPL - Apple Inc.
            </Typography>
            <Divider orientation="horizontal" />
          </Box>
          <Box>
            <Box py={4} display="flex" justifyContent="flex-end" gap={5}>
              <ButtonGroup variant="primary">
                {['1D', '5D', '1M', '3M', '6M', 'YTD', '1Y', '5Y', 'All'].map((label) => (
                  <Button key={label}>{label}</Button>
                ))}
              </ButtonGroup>
              <ButtonGroup variant="primary">
                <Button>
                  <Icon.Line />
                  <Icon.ChevronDown />
                </Button>
              </ButtonGroup>
            </Box>
            <Graph {...graphProps} />
          </Box>
          <Box flex="1 0 auto" my={2}>
            <KeyStatistics {...keyStats} />
          </Box>
          <Box sx={styles.footer}>
            <StockPriceFooter />
          </Box>
        </Box>
        <Box sx={styles.sidebar}>
          <Sidebar />
        </Box>
      </Box>
    </Box>
  );
}
