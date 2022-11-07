import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

const TableExample = () => {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Label
            </TableCell>
            <TableCell align="right">Value </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Label
            </TableCell>
            <TableCell align="right">Value </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Label
            </TableCell>
            <TableCell align="right">Value </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableExample;
