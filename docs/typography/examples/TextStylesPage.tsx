import { Grid, Palette, useTheme } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

import { Typography } from '../../../src/index';
import TopBar from '../../common/top-bar';

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

const tableCellStyles = (palette: Palette) => {
  return {
    width: '7.625rem',
    height: '2.5rem',
    padding: 0,
    color: palette.common.white,
    borderColor: palette.grey['600'],
  };
};
const tableColumns: string[] = [
  'Category',
  'Style Name',
  'Font Styles',
  'Alignment',
  'Size',
  'Capitalization',
];

const TextStylesPage: React.FC = () => {
  const { palette } = useTheme();
  return (
    <Grid
      container
      sx={{
        bgcolor: palette.mode === 'dark' ? palette.background.paper : palette.logo,
      }}
    >
      <Grid item xs={12}>
        <TopBar title={'STYLE'} />
      </Grid>
      <TableContainer>
        <Table
          sx={{
            width: '45.75rem',
            margin: '2.4375rem auto 22rem',
          }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              {tableColumns.map((column) => {
                return (
                  <TableCell
                    key={column}
                    align="left"
                    sx={{
                      ...tableCellStyles(palette),
                    }}
                  >
                    <Typography variant="body1">{column}</Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.category}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    padding: 0,
                    color: palette.common.white,
                    borderColor: palette.grey['600'],
                  }}
                >
                  <Typography variant={row.category.toLowerCase() as any}>
                    {row.category}
                  </Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles(palette),
                  }}
                >
                  <Typography variant="body2">{row.styleName}</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles(palette),
                  }}
                >
                  <Typography variant="body2">{row.fontStyles}</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles(palette),
                  }}
                >
                  <Typography variant="body2">{row.alignment}</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles(palette),
                  }}
                >
                  <Typography variant="body2">{row.size}</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...tableCellStyles(palette),
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
