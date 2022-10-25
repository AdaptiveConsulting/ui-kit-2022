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
import { Button } from '@ui-kit-2022/components';

const StatesPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '900px',
        backgroundColor: '#323232',
        paddingLeft: '1.25rem',
        paddingTop: '1.875rem',
        paddingBottom: '3.5rem',
        color: theme.palette.common.white,
      }}
    >
      {/* primary-any background */}
      <Box sx={{ marginBottom: '2.5rem' }}>
        <Box sx={{ paddingLeft: '5.5rem' }}>
          <Typography>Primary-any background</Typography>
        </Box>
        <TableContainer>
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none',
              },
              width: '93%',
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ width: '7.5%' }}>
                  <Typography variant="subheader1"></Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Default</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Hover</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Active/Pressed</Typography>
                </TableCell>
                <TableCell align="left" sx={{ paddingRight: '0' }}>
                  <Typography variant="subheader1">Focused(ADA)</Typography>
                </TableCell>
                <TableCell align="left" sx={{ paddingRight: '0' }}>
                  <Typography variant="subheader1">Disabled</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ width: '10%', paddingLeft: '0' }}>
                  <Typography variant="subheader3">Default</Typography>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingRight: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingRight: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    width: '7.5%',
                    paddingLeft: '0',
                  }}
                >
                  <Typography variant="subheader3">Icon Right</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    paddingRight: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: '7.5%', paddingLeft: '0' }}>
                  <Typography variant="subheader3">Icon Left</Typography>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell sx={{}}>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingRight: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* secondary-on light background */}
      <Box sx={{ marginBottom: '1.1875rem' }}>
        <Box sx={{ paddingLeft: '5.5rem' }}>
          <Typography>Secondary-On light background</Typography>
        </Box>
        <TableContainer>
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none',
              },
              width: '80%',
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ width: '7.5%' }}>
                  <Typography variant="subheader1"></Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Default</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Hover</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Active/Pressed</Typography>
                </TableCell>
                <TableCell align="left" sx={{ paddingRight: '0' }}>
                  <Typography variant="subheader1">Focused(ADA)</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ width: '10%', paddingLeft: '0' }}>
                  <Typography variant="subheader3">Default</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingRight: '0',
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    width: '7.5%',
                    paddingLeft: '0',
                  }}
                >
                  <Typography variant="subheader3">Icon Right</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    paddingRight: '0',
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: '7.5%', paddingLeft: '0' }}>
                  <Typography variant="subheader3">Icon Left</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                    paddingRight: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* secondary-on dark background */}
      <Box sx={{ marginBottom: '2.5rem' }}>
        <Box sx={{ paddingLeft: '5.5rem' }}>
          <Typography>Secondary-On dark background</Typography>
        </Box>
        <TableContainer>
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none',
              },
              width: '80%',
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ width: '7.5%' }}>
                  <Typography variant="subheader1"></Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Default</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Hover</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Active/Pressed</Typography>
                </TableCell>
                <TableCell align="left" sx={{ paddingRight: '0' }}>
                  <Typography variant="subheader1">Focused(ADA)</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ width: '10%', paddingLeft: '0' }}>
                  <Typography variant="subheader3">Default</Typography>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingRight: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    width: '7.5%',
                    paddingLeft: '0',
                  }}
                >
                  <Typography variant="subheader3">Icon Right</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    paddingRight: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: '7.5%', paddingLeft: '0' }}>
                  <Typography variant="subheader3">Icon Left</Typography>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingRight: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* tertiary-on light background */}
      <Box sx={{ marginBottom: '2.5rem' }}>
        <Box sx={{ paddingLeft: '5.5rem' }}>
          <Typography>Tertiary-On light background</Typography>
        </Box>
        <TableContainer>
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none',
              },
              width: '80%',
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ width: '7.5%' }}>
                  <Typography variant="subheader1"></Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Default</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Hover</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Active/Pressed</Typography>
                </TableCell>
                <TableCell align="left" sx={{ paddingRight: '0' }}>
                  <Typography variant="subheader1">Focused(ADA)</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ width: '10%', paddingLeft: '0' }}>
                  <Typography variant="subheader3">Default</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingRight: '0',
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    width: '7.5%',
                    paddingLeft: '0',
                  }}
                >
                  <Typography variant="subheader3">Icon Right</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    paddingRight: '0',
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: '7.5%', paddingLeft: '0' }}>
                  <Typography variant="subheader3">Icon Left</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                    paddingRight: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* tertiary-on dark background */}
      <Box>
        <Box sx={{ paddingLeft: '5.5rem' }}>
          <Typography>Tertiary-On dark background</Typography>
        </Box>
        <TableContainer>
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none',
              },
              width: '80%',
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ width: '7.5%' }}>
                  <Typography variant="subheader1"></Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Default</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Hover</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subheader1">Active/Pressed</Typography>
                </TableCell>
                <TableCell align="left" sx={{ paddingRight: '0' }}>
                  <Typography variant="subheader1">Focused(ADA)</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ width: '10%', paddingLeft: '0' }}>
                  <Typography variant="subheader3">Default</Typography>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingRight: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    width: '7.5%',
                    paddingLeft: '0',
                  }}
                >
                  <Typography variant="subheader3">Icon Right</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: '0',
                    paddingBottom: '0',
                    paddingRight: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: '7.5%', paddingLeft: '0' }}>
                  <Typography variant="subheader3">Icon Left</Typography>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell>
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
                <TableCell
                  sx={{
                    paddingRight: '0',
                  }}
                >
                  <Button variant="PRIMARY">BUTTON TEXT</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
export default StatesPage;
