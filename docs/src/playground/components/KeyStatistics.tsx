import { Box, Table, TableCell, TableRow, useMediaQuery, useTheme } from '@mui/material';
import { Typography } from '@ui-kit-2022/components';

export interface Stats {
  open: string;
  close: string;
  high: string;
  low: string;
  dayRange: string;
  yearRange: string;
  marketCap: string;
  p2eRatio: string;
  dividendYield: string;
  eps: string;
  volume: string;
  totalAverageVolume: string;
}

interface Props {
  keyStats: Stats;
  loading?: boolean;
}

const labels = new Map([
  ['open', 'Open'],
  ['high', 'High'],
  ['low', 'Low'],
  ['close', 'Previous Close'],
  ['dayRange', 'Day Range'],
  ['yearRange', '52-Week Range'],
  ['marketCap', 'Market Cap'],
  ['p2eRatio', 'P/E Ratio'],
  ['dividendYield', 'Dividend Yield'],
  ['eps', 'Earnings Per Share'],
  ['volume', 'Volume'],
  ['totalAverageVolume', 'Total Avg. Volume'],
]);

const partition = <T,>(arr: T[], n: number) => {
  if (n <= 0) {
    return [];
  }
  return arr.reduce((acc, value) => {
    const last = acc[acc.length - 1];
    if (last && last.length < n) {
      return [...acc.slice(0, -1), [...last, value]];
    } else {
      return [...acc, [value]];
    }
  }, [] as Array<Array<T>>);
};

const renderStatRow = ({ keyStats, loading }: Props, name: keyof Stats) => (
  <TableRow key={name}>
    <TableCell component="th" scope="row">
      {labels.get(name)}
    </TableCell>
    <TableCell align="right">
      <Typography variant="body2" loading={loading}>
        {keyStats[name]}
      </Typography>
    </TableCell>
  </TableRow>
);

const styles = {
  content: {
    display: 'flex',
    gap: 5,
    mb: 5,
  },
};

const KeyStatistics = (props: Props) => {
  const { breakpoints } = useTheme();
  let nRows = 4;
  if (useMediaQuery(breakpoints.down('lg'))) {
    nRows = 6;
  }
  if (useMediaQuery(breakpoints.down('sm'))) {
    nRows = 12;
  }
  return (
    <>
      <Typography variant="h4" my={5}>
        Key Statistics
      </Typography>
      <Box display="flex" gap={5} mb={5} sx={styles.content}>
        {partition(Array.from(labels.keys()), nRows).map((keys, index) => (
          <Table key={index} sx={{ tableLayout: 'fixed' }}>
            {(keys as Array<keyof Stats>).map(renderStatRow.bind(this, props))}
          </Table>
        ))}
      </Box>
    </>
  );
};

export default KeyStatistics;
