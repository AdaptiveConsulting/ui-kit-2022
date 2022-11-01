import {
  Box,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from '@mui/material';
import { Typography } from '@ui-kit-2022/components';
import { dark, light } from '@ui-kit-2022/theme';

import UsageExample from '../building-blocks/button/UsageExample';
import TopBar from '../building-blocks/common/top-bar';

function createData(variant: string, purpose: string) {
  return { variant, purpose };
}
const rows = [
  createData(
    'Primary',
    'This button is primarily used for the main call to' +
      'action on the page. This button moves a user forward through the main workflow.',
  ),
  createData(
    'Secondary',
    'This button is for secondary action. A secondary action' +
      'is an alternate option a user can take. When used as a part of a pair, the secondary button’s function is to perform another action of the set, such as “Cancel” or “Back”.',
  ),
  createData(
    'Tertiary',
    'This button is for less important actions and can sometimes stand alone. Tertiary buttons can be used in by themselves or paired with a primary button when there is more than 2 calls to action. Tertiary buttons can also be used for sub-tasks on a page where a primary button for the main and final action is present.',
  ),
];

const UsagePage = () => {
  return (
    <>
      <Box>
        <TopBar title={'USAGE'} />
      </Box>
      <Box
        sx={{
          p: '1.875rem 1rem 3rem 1.875rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <TableContainer
          sx={{
            width: '674px',
            marginRight: '0.8125rem',
          }}
        >
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none',
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  style={{ verticalAlign: 'top' }}
                  sx={{ padding: 0, width: '164px' }}
                >
                  <Typography variant="subheader1">Variant</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    padding: '0 0 1.25rem 0',
                    width: '510px',
                  }}
                >
                  <Typography variant="subheader1">Purpose</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.variant}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ verticalAlign: 'top' }}
                    sx={{
                      padding: 0,
                      width: '164px',
                    }}
                  >
                    <Typography variant="subheader3">{row.variant}</Typography>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      padding: '0 0 1.25rem 0',
                      width: '510px',
                    }}
                  >
                    <Typography variant="body2">{row.purpose}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ThemeProvider theme={dark}>
          <UsageExample />
        </ThemeProvider>
        <ThemeProvider theme={light}>
          <Box sx={{ marginLeft: '0.56rem' }}>
            <UsageExample />
          </Box>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default UsagePage;
