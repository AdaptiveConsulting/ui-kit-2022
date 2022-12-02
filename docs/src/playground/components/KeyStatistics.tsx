import { Box, Table, TableCell, TableRow, Theme, Typography } from '@mui/material';

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

interface StatRowProps {
  name: keyof Stats;
  value: string;
}

const renderStatRow = (stats: Stats, name: keyof Stats) => (
  <TableRow key={name}>
    <TableCell component="th" scope="row">
      {labels.get(name)}
    </TableCell>
    <TableCell align="right">{stats[name]}</TableCell>
  </TableRow>
);

const styles = {
  content: ({ breakpoints }: Theme) => ({
    display: 'flex',
    gap: 5,
    mb: 5,
    [breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  }),
};

const KeyStatistics = (props: Stats) => (
  <>
    <Typography variant="h4" my={5}>
      Key Statistics
    </Typography>
    <Box display="flex" gap={5} mb={5} sx={styles.content}>
      <Table>
        {(['open', 'high', 'low', 'close'] as const).map(renderStatRow.bind(this, props))}
      </Table>
      <Table>
        {(['dayRange', 'yearRange', 'marketCap', 'p2eRatio'] as const).map(
          renderStatRow.bind(this, props),
        )}
      </Table>
      <Table>
        {(['dividendYield', 'eps', 'volume', 'totalAverageVolume'] as const).map(
          renderStatRow.bind(this, props),
        )}
      </Table>
    </Box>
  </>
);

export default KeyStatistics;
