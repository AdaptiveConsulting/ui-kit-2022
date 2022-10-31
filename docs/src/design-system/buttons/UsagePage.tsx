import {
  Box,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Typography } from '@ui-kit-2022/components';

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
  const { palette } = useTheme();

  return (
    <>
      <Box sx={{ width: '1060px' }}>
        <TopBar title={'USAGE'} />
      </Box>
      <Box
        sx={{
          width: '1060px',
          height: '295px',
          backgroundColor: '#323232',
          paddingTop: '1.875rem',
          paddingLeft: '1.875rem',
          display: 'flex',
        }}
      >
        <TableContainer
          sx={{
            backgroundColor: '#323232',
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
                  sx={{ color: palette.grey[50], padding: 0, width: '164px' }}
                >
                  <Typography variant="subheader1">Variant</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: palette.grey[50],
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
                      color: palette.grey[50],
                      padding: 0,
                      width: '164px',
                    }}
                  >
                    <Typography variant="subheader3">{row.variant}</Typography>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: palette.grey[50],
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
        <UsageExample title="Dark" />
        <Box sx={{ marginLeft: '0.56rem' }}>
          <UsageExample title="Light" />
        </Box>
      </Box>
    </>
  );
};

export default UsagePage;
