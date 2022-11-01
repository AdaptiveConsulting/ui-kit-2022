import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name: string, price: number) {
  return { name, price };
}

const rows = [
  createData(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi felis, id venenatis ante iaculis ut. In convallis dolor elit, et ultricies arcu tincidunt tempor. Aenean consequat est eu lectus molestie, eu posuere leo tincidunt. Maecenas accumsan nisi euismod odio luctus venenatis. Phasellus finibus est eget mauris posuere, ut semper nunc imperdiet. Donec dignissim posuere ex. Maecenas sagittis enim egestas tellus venenatis lacinia.',
    322.63,
  ),
  createData('High', 324.65),
  createData('Low', 318.21),
  createData('Previous Close', 323.62),
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
