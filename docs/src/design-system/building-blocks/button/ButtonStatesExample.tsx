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
  theme: Theme;
}

const ButtonStatesExample: React.FC<Props> = ({ variantType, theme = useTheme() }) => {
  const bgColor = (theme: Theme) => {
    return {
      backgroundColor: {
        light: theme.palette.grey[50],
        dark: theme.palette.background.paper,
      }[theme.palette.mode],
    };
  };
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
                  ...bgColor(theme),
                  borderTopLeftRadius: '4px',
                }}
              >
                <Button variant={variantType}>BUTTON TEXT</Button>
              </TableCell>
              <TableCell
                sx={{
                  ...bgColor(theme),
                }}
              >
                <Box className="hover">
                  <Button variant={variantType}>BUTTON TEXT</Button>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  ...bgColor(theme),
                }}
              >
                <Box className="active">
                  <Button variant={variantType}>BUTTON TEXT</Button>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  paddingRight: '0',
                  ...bgColor(theme),
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
                  ...bgColor(theme),
                }}
              >
                <Button variant={variantType} icon="right">
                  BUTTON TEXT
                </Button>
              </TableCell>
              <TableCell
                sx={{
                  ...bgColor(theme),
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
                  ...bgColor(theme),
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
                  ...bgColor(theme),
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
                  ...bgColor(theme),
                  borderBottomLeftRadius: '4px',
                }}
              >
                <Button variant={variantType} icon="left">
                  BUTTON TEXT
                </Button>
              </TableCell>
              <TableCell
                sx={{
                  ...bgColor(theme),
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
                  ...bgColor(theme),
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
                  ...bgColor(theme),
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
