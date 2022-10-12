import { Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Typography } from '../../../src/index';
import TypographyTop from './typography-top';

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
  width: 122,
  height: 40,
  padding: 0,
  color: '#ffffff',
  borderColor: '#6b6b6b',
};
const TextStylesPage: React.FC = () => {
  return (
    <Grid container sx={{ bgcolor: '#323232', width: 887 }}>
      <Grid item xs={12}>
        <TypographyTop title={'STYLE'} />
      </Grid>
      <Grid>
        <TableContainer>
          <Table
            sx={{
              width: 732,
              ml: 10,
              mt: 5,
              mb: 44,
              bgcolor: '#323232',
            }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    ...tableCellStyles,
                  }}
                >
                  <Typography variant="body1">Category</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles,
                  }}
                >
                  <Typography variant="body1">Style Name</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles,
                  }}
                >
                  <Typography variant="body1">Font Styles</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles,
                  }}
                >
                  <Typography variant="body1">Alignment</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles,
                  }}
                >
                  <Typography variant="body1">Size</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles,
                  }}
                >
                  <Typography variant="body1">Case</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.category}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ padding: 0, color: '#ffffff', borderColor: '#6b6b6b' }}
                  >
                    <Typography variant={row.category.toLowerCase() as any}>
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
    </Grid>
  );
};

export default TextStylesPage;
