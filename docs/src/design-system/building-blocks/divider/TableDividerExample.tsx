import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  ThemeProvider,
  useTheme,
} from '@mui/material';
import { dark, light } from '@ui-kit-2022/theme';
import React from 'react';

export interface Props {
  dividerDo?: boolean;
}

const TableDividerExample: React.FC<Props> = ({ dividerDo }) => {
  const { palette } = useTheme();
  return (
    <ThemeProvider theme={palette.mode === 'light' ? dark : light}>
      <Box
        bgcolor={
          palette.mode === 'light'
            ? dark.palette.background.paper
            : light.palette.background.paper
        }
        sx={{ p: '0.75rem 0.25rem' }}
      >
        <TableContainer>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Day Range
                </TableCell>
                <TableCell align="right" sx={{ borderLeft: dividerDo ? 0 : 1 }}>
                  $322.63 - 318.21
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  52 Week Range
                </TableCell>
                <TableCell align="right" sx={{ borderLeft: dividerDo ? 0 : 1 }}>
                  $169.50 - 327.85
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Market Cap
                </TableCell>
                <TableCell align="right" sx={{ borderLeft: dividerDo ? 0 : 1 }}>
                  1.40 T
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  P/E Ratio
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    borderLeft: dividerDo
                      ? 'none'
                      : `1px solid ${
                          palette.mode === 'light'
                            ? dark.palette.divider
                            : light.palette.divider
                        } !important`,
                  }}
                >
                  25.11
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
};
export default TableDividerExample;
