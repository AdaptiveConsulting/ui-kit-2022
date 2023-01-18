import { Box, Button, ButtonGroup, Menu, MenuItem, Theme } from '@mui/material';
import {
  BarChart,
  BarChartProps,
  Icon,
  LineChart,
  LineChartProps,
  TextSearch,
  TextSearchOptionBase,
  TextSearchProps,
} from '@ui-kit-2022/components';
import { useRef, useState } from 'react';

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
    [breakpoints.down('md')]: {
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
  textInput: ({ typography }: Theme) => ({
    '& .MuiInputBase-input': typography.h3,
  }),
};

export interface ExamplePageProps<T extends TextSearchOptionBase> {
  // Need a way to import Types from the UI Kit to avoid having to make duplicate type defs
  graphProps: LineChartProps;
  tickerSearchProps: TextSearchProps<T>;
  loading?: boolean;
}

type GraphType = 'Line' | 'Bar';
const graphTypes: Array<GraphType> = ['Line', 'Bar'];

const graphTypeToIcon = (graphType: GraphType) => {
  return { Line: Icon.Line, Bar: Icon.Bar }[graphType];
};

// TODO: The Props for the graphs should be unified into a single proptype.
const linePropsToBarProps = (lineProps: LineChartProps): BarChartProps => ({
  xAxisStep: lineProps.xLabelStep as number,
  yAxisStep: lineProps.yLabelStep as number,
  isUp: lineProps.isUp,
  dataset: lineProps.data[0] as number[],
  labels: lineProps.labels,
  previousPrice: lineProps.previousData as number,
  currentPrice: lineProps.currentData as number,
});

export default function ExamplePage<T extends TextSearchOptionBase>({
  graphProps,
  tickerSearchProps,
  loading,
}: ExamplePageProps<T>) {
  const [graphType, setGraphType] = useState('Line' as GraphType);
  const graphToggle = useRef(null);
  const [graphToggleOpen, setGraphToggleOpen] = useState(false);
  const clickGraphToggle = () => setGraphToggleOpen(true);
  const closeGraphToggle = (event: React.MouseEvent<HTMLElement>) => {
    const graphType = event.currentTarget.getAttribute('data-graph-type') as GraphType;
    if (graphType) {
      setGraphType(graphType);
    }
    setGraphToggleOpen(false);
  };

  const GraphIcon = graphTypeToIcon(graphType);

  return (
    <Box sx={styles.container}>
      <Box>
        <AppBar />
      </Box>
      <Box sx={styles.content}>
        <Box flex="2" display="flex" flexDirection="column" px={4} sx={{ minWidth: 0 }}>
          <Box mt={6} p={2} sx={styles.textInput}>
            <TextSearch {...tickerSearchProps} />
          </Box>
          <Box>
            <Box py={4} display="flex" justifyContent="flex-end" gap={5}>
              <ButtonGroup variant="primary">
                {['1D', '5D', '1M', '3M', '6M', 'YTD', '1Y', '5Y', 'All'].map((label) => (
                  <Button key={label}>{label}</Button>
                ))}
              </ButtonGroup>
              <Box sx={{ width: 50 }}>
                <ButtonGroup variant="primary" ref={graphToggle}>
                  <Button onClick={clickGraphToggle}>
                    <GraphIcon />
                    <Icon.ChevronDown />
                  </Button>
                </ButtonGroup>
                <Menu
                  open={graphToggleOpen}
                  anchorEl={graphToggle.current}
                  onClose={closeGraphToggle}
                >
                  {graphTypes.map((gtype) => {
                    const GraphIcon = graphTypeToIcon(gtype);
                    return (
                      <MenuItem
                        key={gtype}
                        data-graph-type={gtype}
                        onClick={closeGraphToggle}
                      >
                        <GraphIcon />
                      </MenuItem>
                    );
                  })}
                </Menu>
              </Box>
            </Box>
            {graphType === 'Line' ? (
              <LineChart {...graphProps} loading={loading} />
            ) : (
              <BarChart {...linePropsToBarProps(graphProps)} />
            )}
          </Box>
          <Box flex="1 0 auto" my={2}>
            <KeyStatistics keyStats={keyStats} loading={loading} />
          </Box>
          <Box sx={styles.footer}>
            <StockPriceFooter />
          </Box>
        </Box>
        <Box sx={styles.sidebar}>
          <Sidebar loading={loading} />
        </Box>
      </Box>
    </Box>
  );
}
