import { Grid, tableCellClasses, TypographyProps, useTheme } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@ui-kit-2022/components';

import TopBar from '../building-blocks/common/top-bar';

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

const tableCellStyles = {
  width: '7.625rem',
  height: '2.5rem',
};
const tableColumns: string[] = [
  'Category',
  'Style Name',
  'Font Styles',
  'Alignment',
  'Size',
  'Case',
];

const TextStylesPage: React.FC = () => {
  const { palette } = useTheme();
  return (
    <Grid container>
      <Grid item xs={12}>
        <TopBar title={'Style'} />
      </Grid>
      <TableContainer>
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              p: '0',
              verticalAlign: 'middle',
            },
            width: '45.75rem',
            margin: '2.5rem auto 22rem',
            borderBottom: 1,
            borderColor: palette.divider,
          }}
        >
          <TableHead>
            {tableColumns.map((column) => {
              return (
                <TableCell
                  key={column}
                  align="left"
                  sx={{
                    ...tableCellStyles,
                  }}
                >
                  <Typography variant="body1">{column}</Typography>
                </TableCell>
              );
            })}
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.category}>
                <TableCell component="th" scope="row">
                  <Typography
                    variant={row.category.toLowerCase() as TypographyProps['variant']}
                  >
                    {row.category}
                  </Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles,
                  }}
                >
                  <Typography variant="body2">{row.styleName}</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles,
                  }}
                >
                  <Typography variant="body2">{row.fontStyles}</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles,
                  }}
                >
                  <Typography variant="body2">{row.alignment}</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles,
                  }}
                >
                  <Typography variant="body2">{row.size}</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles,
                  }}
                >
                  <Typography variant="body2">{row.capitalization}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default TextStylesPage;
