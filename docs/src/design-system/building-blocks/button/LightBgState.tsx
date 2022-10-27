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
import React from 'react';

interface Props {
  variantType?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
}

const LightBgState: React.FC<Props> = ({ variantType }) => {
  const { palette } = useTheme();
  return (
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
            <TableCell align="left" sx={{ paddingTop: '0', color: palette.common.white }}>
              <Typography variant="subheader3">Default</Typography>
            </TableCell>
            <TableCell align="left" sx={{ paddingTop: '0', color: palette.common.white }}>
              <Typography variant="subheader3">Hover</Typography>
            </TableCell>
            <TableCell align="left" sx={{ paddingTop: '0', color: palette.common.white }}>
              <Typography variant="subheader3">Active/Pressed</Typography>
            </TableCell>
            <TableCell
              align="left"
              sx={{
                paddingRight: '0',
                paddingTop: '0',
                color: palette.common.white,
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
                width: '10%',
                paddingLeft: '0',
                color: palette.common.white,
              }}
            >
              <Typography variant="subheader3">Default</Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: palette.grey[50],
                borderTopLeftRadius: '4px',
              }}
            >
              <Button variant={variantType}>BUTTON TEXT</Button>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: palette.grey[50],
              }}
            >
              <Box className="hover">
                <Button variant={variantType}>BUTTON TEXT</Button>
              </Box>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: palette.grey[50],
              }}
            >
              <Box className="active">
                <Button variant={variantType}>BUTTON TEXT</Button>
              </Box>
            </TableCell>
            <TableCell
              sx={{
                paddingRight: '0',
                backgroundColor: palette.grey[50],
                borderTopRightRadius: '4px',
              }}
            >
              <Box className="focus">
                <Button variant={variantType}>BUTTON TEXT</Button>
              </Box>
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
                backgroundColor: palette.grey[50],
              }}
            >
              <Button variant={variantType} icon="right">
                BUTTON TEXT
              </Button>
            </TableCell>
            <TableCell
              sx={{
                py: '0',
                backgroundColor: palette.grey[50],
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
                py: '0',
                backgroundColor: palette.grey[50],
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
                py: '0',
                paddingRight: '0',
                backgroundColor: palette.grey[50],
              }}
            >
              <Box className="focus">
                <Button variant={variantType} icon="right">
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
            <TableCell
              sx={{
                backgroundColor: palette.grey[50],
                borderBottomLeftRadius: '4px',
              }}
            >
              <Button variant={variantType} icon="left">
                BUTTON TEXT
              </Button>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: palette.grey[50],
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
                backgroundColor: palette.grey[50],
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
                backgroundColor: palette.grey[50],
                paddingRight: '0',
                borderBottomRightRadius: '4px',
              }}
            >
              <Box className="focus">
                <Button variant={variantType} icon="left">
                  BUTTON TEXT
                </Button>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default LightBgState;
