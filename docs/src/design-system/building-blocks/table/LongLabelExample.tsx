import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  useTheme,
} from '@mui/material';
export interface Props {
  longLabel: string;
  value: string;
}
const LongLabelExample: React.FC<Props> = ({ longLabel, value }) => {
  const theme = useTheme();
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow
            sx={{
              borderTop: 1,
              borderBottom: 1,
              borderColor: theme.palette.divider,
            }}
          >
            <TableCell component="th" scope="row">
              {longLabel}
            </TableCell>
            <TableCell align="right">{value}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default LongLabelExample;
