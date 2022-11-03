import {
  Box,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  ThemeProvider,
  useTheme,
} from '@mui/material';
import { Button, Typography } from '@ui-kit-2022/components';
import React from 'react';

export interface Props {
  variantType?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  overrideTheme?: Theme;
}

const ButtonStatesExample: React.FC<Props> = ({ variantType, overrideTheme }) => {
  const globalTheme = useTheme();
  const theme = overrideTheme ?? globalTheme;
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[50]
      : theme.palette.background.paper;
  return (
    <TableContainer>
      <Table
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: 'none',
            p: '0.625rem 0 0.625rem 0.5rem',
          },
          width: '78%',
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Typography variant="subheader1"></Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="subheader3">Default</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="subheader3">Hover</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="subheader3">Active/Pressed</Typography>
            </TableCell>
            <TableCell
              align="left"
              sx={{
                paddingRight: '0',
                paddingTop: '0',
              }}
            >
              <Typography variant="subheader3">Focused(ADA)</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                width: '12%',
              }}
            >
              <Typography variant="subheader3">Default</Typography>
            </TableCell>
            <ThemeProvider theme={theme}>
              <TableCell
                sx={{
                  backgroundColor,
                  borderTopLeftRadius: '4px',
                }}
              >
                <Button variant={variantType}>BUTTON TEXT</Button>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor,
                }}
              >
                <Box className="hover">
                  <Button variant={variantType}>BUTTON TEXT</Button>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor,
                }}
              >
                <Box className="active">
                  <Button variant={variantType}>BUTTON TEXT</Button>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  paddingRight: '0',
                  backgroundColor,
                  borderTopRightRadius: '4px',
                  width: '7.5rem',
                }}
              >
                <Box className="focus">
                  <Button variant={variantType}>BUTTON TEXT</Button>
                </Box>
              </TableCell>
            </ThemeProvider>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subheader3">Icon Right</Typography>
            </TableCell>
            <ThemeProvider theme={theme}>
              <TableCell
                sx={{
                  backgroundColor,
                }}
              >
                <Button variant={variantType} icon="right">
                  BUTTON TEXT
                </Button>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor,
                }}
              >
                <Box className="hover">
                  <Button variant={variantType} icon="right">
                    BUTTON TEXT
                  </Button>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor,
                }}
              >
                <Box className="active">
                  <Button variant={variantType} icon="right">
                    BUTTON TEXT
                  </Button>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor,
                  width: '7.5rem',
                }}
              >
                <Box className="focus">
                  <Button variant={variantType} icon="right">
                    BUTTON TEXT
                  </Button>
                </Box>
              </TableCell>
            </ThemeProvider>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subheader3">Icon Left</Typography>
            </TableCell>
            <ThemeProvider theme={theme}>
              <TableCell
                sx={{
                  backgroundColor,
                  borderBottomLeftRadius: '4px',
                }}
              >
                <Button variant={variantType} icon="left">
                  BUTTON TEXT
                </Button>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor,
                }}
              >
                <Box className="hover">
                  <Button variant={variantType} icon="left">
                    BUTTON TEXT
                  </Button>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor,
                }}
              >
                <Box className="active">
                  <Button variant={variantType} icon="left">
                    BUTTON TEXT
                  </Button>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor,
                  borderBottomRightRadius: '4px',
                  width: '7.5rem',
                }}
              >
                <Box className="focus">
                  <Button variant={variantType} icon="left">
                    BUTTON TEXT
                  </Button>
                </Box>
              </TableCell>
            </ThemeProvider>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ButtonStatesExample;
