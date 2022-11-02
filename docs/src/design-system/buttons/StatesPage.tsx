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
import { Button, Typography } from '@ui-kit-2022/components';
import { dark, light } from '@ui-kit-2022/theme';

import ButtonStatesExample from '../building-blocks/button/ButtonStatesExample';
import TopBar from '../building-blocks/common/top-bar';

const StatesPage = () => {
  const { palette } = useTheme();
  return (
    <>
      <Box>
        <TopBar title={'STATES'} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            width: '900px',
            paddingLeft: '1.25rem',
            paddingTop: '1.875rem',
            paddingBottom: '3.5rem',
          }}
        >
          {/* primary-any background */}
          <Box sx={{ marginBottom: '2.5rem' }}>
            <Box sx={{ paddingLeft: '5.2rem' }}>
              <Typography variant="subheader1">Primary - any background</Typography>
            </Box>
            <TableContainer>
              <Table
                sx={{
                  [`& .${tableCellClasses.root}`]: {
                    borderBottom: 'none',
                    p: '0.625rem 1.8rem 0.625rem 0',
                  },
                  width: '98%',
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="left" sx={{ width: '7.5%' }}>
                      <Typography></Typography>
                    </TableCell>
                    <TableCell align="left" sx={{ paddingLeft: '0' }}>
                      <Typography variant="subheader3">Default</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="subheader3">Hover</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="subheader3">Active/Pressed</Typography>
                    </TableCell>
                    <TableCell align="left" sx={{ paddingRight: '0' }}>
                      <Typography variant="subheader3">Focused(ADA)</Typography>
                    </TableCell>
                    <TableCell align="left" sx={{ paddingRight: '0' }}>
                      <Typography variant="subheader3">Disabled</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        width: '10%',
                        paddingLeft: '0',
                        paddingTop: '0',
                        color: palette.common.white,
                      }}
                    >
                      <Typography variant="subheader3">Default</Typography>
                    </TableCell>
                    <TableCell sx={{ paddingLeft: '0', paddingTop: '0' }}>
                      <Button variant="PRIMARY">BUTTON TEXT</Button>
                    </TableCell>
                    <TableCell sx={{ paddingTop: '0' }}>
                      <Box className="hover">
                        <Button variant="PRIMARY">BUTTON TEXT</Button>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ paddingTop: '0' }}>
                      <Box className="active">
                        <Button variant="PRIMARY">BUTTON TEXT</Button>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingTop: '0',
                      }}
                    >
                      <Box className="focus">
                        <Button variant="PRIMARY">BUTTON TEXT</Button>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingRight: '0',
                        paddingTop: '0',
                      }}
                    >
                      <Button variant="PRIMARY" disabled>
                        BUTTON TEXT
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        py: '0',
                        width: '7.5%',
                        paddingLeft: '0',
                        color: palette.common.white,
                      }}
                    >
                      <Typography variant="subheader3">Icon Right</Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        py: '0',
                        paddingLeft: '0',
                      }}
                    >
                      <Button variant="PRIMARY" icon="right">
                        BUTTON TEXT
                      </Button>
                    </TableCell>
                    <TableCell
                      sx={{
                        py: '0',
                      }}
                    >
                      <Box className="hover">
                        <Button variant="PRIMARY" icon="right">
                          BUTTON TEXT
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        py: '0',
                      }}
                    >
                      <Box className="active">
                        <Button variant="PRIMARY" icon="right">
                          BUTTON TEXT
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        py: '0',
                        paddingRight: '0',
                      }}
                    >
                      <Box className="focus">
                        <Button variant="PRIMARY" icon="right">
                          BUTTON TEXT
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        width: '7.5%',
                        paddingLeft: '0',
                        color: palette.common.white,
                      }}
                    >
                      <Typography variant="subheader3">Icon Left</Typography>
                    </TableCell>
                    <TableCell sx={{ paddingLeft: '0' }}>
                      <Button variant="PRIMARY" icon="left">
                        BUTTON TEXT
                      </Button>
                    </TableCell>
                    <TableCell sx={{}}>
                      <Box className="hover">
                        <Button variant="PRIMARY" icon="left">
                          BUTTON TEXT
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box className="active">
                        <Button variant="PRIMARY" icon="left">
                          BUTTON TEXT
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingRight: '0',
                      }}
                    >
                      <Box className="focus">
                        <Button variant="PRIMARY" icon="left">
                          BUTTON TEXT
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          {/* secondary-on light background */}
          <Box sx={{ marginBottom: '1.1875rem' }}>
            <Box sx={{ paddingLeft: '5.4rem' }}>
              <Typography variant="subheader1">
                Secondary - On light background
              </Typography>
            </Box>
            <ButtonStatesExample variantType="SECONDARY" theme={light} />
          </Box>
          {/* secondary-on dark background */}
          <Box sx={{ marginBottom: '2.5rem' }}>
            <Box sx={{ paddingLeft: '5.5rem' }}>
              <Typography variant="subheader1">Secondary - On dark background</Typography>
            </Box>
            <ButtonStatesExample variantType="SECONDARY" theme={dark} />
          </Box>
          {/* tertiary-on light background */}
          <Box sx={{ marginBottom: '1.1875rem' }}>
            <Box sx={{ paddingLeft: '5.4rem' }}>
              <Typography variant="subheader1">Tertiary - On light background</Typography>
            </Box>
            <ButtonStatesExample variantType="TERTIARY" theme={light} />
          </Box>
          {/* tertiary-on dark background */}
          <Box>
            <Box sx={{ paddingLeft: '5.5rem' }}>
              <Typography variant="subheader1">Tertiary - On dark background</Typography>
            </Box>
            <ButtonStatesExample variantType="TERTIARY" theme={dark} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default StatesPage;
