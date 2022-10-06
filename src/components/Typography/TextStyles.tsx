import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  category: string,
  styleName: string,
  fontStyles: string,
  alignment: string,
  size: string,
  capitalization: string,
) {
  return { category, styleName, fontStyles, alignment, size, capitalization };
}

const rows = [
  createData('H1', 'Header Large', 'Medium', 'Left', '24px', 'Title'),
  createData('H2', 'Header Small', 'Medium', 'Left', '20px', 'Title'),
  createData('H3', 'Title Large', 'Regular', 'Left', '32px', 'Title'),
  createData('H4', 'Title Small', 'Regular', 'Left', '16px', 'Title'),
  createData('Subheader1', 'Subheader Large', 'Medium', 'Left', '16px', 'Title'),
  createData('Subheader2', 'Subheader Medium', 'Medium', 'Left', '13px', 'Title'),
  createData('Subheader3', 'Subheader Small', 'Medium', 'Left', '12px', 'Title'),
  createData('Subheader4', 'Subheader XSmall', 'Medium', 'Left', '11px', 'Title'),
  createData('Body1', 'Body Large', 'Regular', 'Left', '16px', 'Sentence'),
  createData('Body2', 'Body Small', 'Regular', 'Left', '12px', 'Sentence'),
  createData('Caption', 'Caption', 'Light Italic', 'Left', '11px', 'Sentence'),
];
export default function TextStyles() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: 732, ml: 10, mt: 5, mb: 44 }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>Category</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>Style Name</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>Font Styles</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>Alignment</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>Size</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>Case</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.category}>
              <TableCell component="th" scope="row">
                <Typography variant={row.category.toLowerCase()}>
                  {row.category}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography>{row.styleName}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography>{row.fontStyles}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography>{row.alignment}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography>{row.size}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography>{row.capitalization}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
