import { Box, Grid, Theme, useMediaQuery, useTheme } from '@mui/material';
import { Button, Typography } from '@ui-kit-2022/components';
import React from 'react';

export interface Props {
  variantType?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  overrideTheme?: Theme;
}

const ButtonStatesExample: React.FC<Props> = ({ variantType, overrideTheme }) => {
  const globalTheme = useTheme();
  const theme = overrideTheme ?? globalTheme;
  const gridDirection = useMediaQuery(theme.breakpoints.down('md')) ? 'column' : 'row';
  const paddingLeft = `${theme.spacing(2)} !important`;
  const gridItemStyle = {
    paddingLeft: paddingLeft,
    ':last-child': {
      backgroundColor: 'transparent',
    },
    backgroundColor:
      variantType !== 'PRIMARY'
        ? theme.palette.mode === 'light'
          ? theme.palette.grey[50]
          : theme.palette.background.paper
        : null,
  };
  const gridItemStyle_Last = {
    ...gridItemStyle,
    [theme.breakpoints.down('md')]: {
      //Using specific padding to have consistent spacing between columns.
      //The grid's negative margin makes consistent spacing difficult.
      paddingLeft: '33px !important',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '8px !important',
    },
  };

  const gridContainerStyle = {
    [theme.breakpoints.down('md')]: {
      width: 'auto !important',
      maxWidth: '160px !important',
      paddingTop: `${theme.spacing(3)} !important`,
      ' > * ': {
        paddingLeft: `${theme.spacing(3)} !important`,
        paddingRight: `${theme.spacing(3)} !important`,
      },
      '> div': {
        width: '100%',
        textAlign: 'center',
        margin: '0 auto',
      },
      ' > div:nth-of-type(5)': {
        paddingBottom: `${theme.spacing(2)} !important`,
      },
    },

    [theme.breakpoints.up('sm')]: {
      ' > * ': {
        paddingRight: `${theme.spacing(2)} !important`,
      },
    },
  };

  return (
    <>
      <Grid
        container
        rowSpacing={{ xs: 6, sm: 2 }}
        sx={{
          [theme.breakpoints.down('md')]: {
            maxWidth: '440px',
            display: 'grid',
            gap: 0,
            gridAutoColumns: 'minmax(0, 1fr)',
            gridTemplateAreas: '"default right left"',
            justifyItems: 'center',
            margin: '0 auto',
            '> *': {
              marginLeft: '0',
              maxWidth: 'unset !important',
              width: '100% !important',
            },
          },
          [theme.breakpoints.down('sm')]: {
            margin: '0 auto',
            gridTemplateAreas: ` 
            "default default"
            "left right"`,
            '> div': {
              marginLeft: 0,
            },
          },
        }}
      >
        {gridDirection === 'column' ? null : (
          <Grid
            container
            item
            columnSpacing={'40px'}
            columns={{ md: 6 }}
            direction={gridDirection}
            rowSpacing={4}
            alignItems="left"
          >
            <Grid item md={1}></Grid>
            <Grid item md={1} sx={{ paddingLeft: paddingLeft }}>
              <Typography variant="subheader3">Default</Typography>
            </Grid>
            <Grid item md={1} sx={{ paddingLeft: paddingLeft }}>
              <Typography variant="subheader3">Hover</Typography>
            </Grid>
            <Grid item md={1} sx={{ paddingLeft: paddingLeft }}>
              <Typography variant="subheader3">Active/Pressed</Typography>
            </Grid>
            <Grid item md={1} sx={{ paddingLeft: paddingLeft }}>
              <Typography variant="subheader3">focused(ADA)</Typography>
            </Grid>
            {variantType === 'PRIMARY' && (
              <Grid item md={1} sx={{ paddingLeft: paddingLeft }}>
                <Typography variant="subheader3">Disabled</Typography>
              </Grid>
            )}
          </Grid>
        )}
        <Grid
          container
          item
          xs={1}
          sm={1}
          md={6}
          columnSpacing={'40px'}
          columns={{ xs: 2, sm: 3, md: 6 }}
          direction={gridDirection}
          alignItems="center"
          rowSpacing={2}
          sx={{
            ...gridContainerStyle,
            gridArea: 'default',
            [theme.breakpoints.up('md')]: {
              marginTop: 0,
            },
            '> *': {
              [theme.breakpoints.up('md')]: {
                paddingTop:
                  variantType !== 'PRIMARY' ? `${theme.spacing(3)} !important` : null,
              },
            },
          }}
        >
          <Grid item md={1}>
            <Typography variant="subheader3">Default</Typography>
          </Grid>
          <Grid item md={1} sx={{ ...gridItemStyle }}>
            <Button variant={variantType}>BUTTON TEXT</Button>
          </Grid>
          <Grid item md={1} sx={{ ...gridItemStyle }}>
            <Box className="hover">
              <Button variant={variantType}>BUTTON TEXT</Button>
            </Box>
          </Grid>
          <Grid item md={1} sx={{ ...gridItemStyle }}>
            <Box className="active">
              <Button variant={variantType}>BUTTON TEXT</Button>
            </Box>
          </Grid>
          <Grid item md={1} sx={{ ...gridItemStyle }}>
            <Box className="focus">
              <Button variant={variantType}>BUTTON TEXT</Button>
            </Box>
          </Grid>
          <Grid item md={1} sx={{ ...gridItemStyle }}>
            {variantType === 'PRIMARY' && (
              <Box>
                <Button variant={variantType} disabled>
                  BUTTON TEXT
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={1}
          sm={1}
          md={6}
          columnSpacing={'40px'}
          columns={{ xs: 2, sm: 3, md: 6 }}
          direction={gridDirection}
          alignItems="center"
          rowSpacing={2}
          sx={{
            gridArea: 'right',
            ...gridContainerStyle,
          }}
        >
          <Grid item md={1}>
            <Typography variant="subheader3">Icon Right</Typography>
          </Grid>
          <Grid item md={1} sx={{ ...gridItemStyle }}>
            <Button variant={variantType} icon="right">
              BUTTON TEXT
            </Button>
          </Grid>
          <Grid item md={1} sx={{ ...gridItemStyle }}>
            <Box className="hover">
              <Button variant={variantType} icon="right">
                BUTTON TEXT
              </Button>
            </Box>
          </Grid>
          <Grid item md={1} sx={{ ...gridItemStyle }}>
            <Box className="active">
              <Button variant={variantType} icon="right">
                BUTTON TEXT
              </Button>
            </Box>
          </Grid>
          <Grid item md={1} sx={{ ...gridItemStyle }}>
            <Box className="focus">
              <Button variant={variantType} icon="right">
                BUTTON TEXT
              </Button>
            </Box>
          </Grid>
          <Grid item md={1} sx={{ ...gridItemStyle }}>
            {variantType === 'PRIMARY' && (
              <Box>
                <Button variant={variantType} disabled icon="right">
                  BUTTON TEXT
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={1}
          sm={1}
          md={6}
          columnSpacing={'40px'}
          columns={{ xs: 2, sm: 3, md: 6 }}
          direction={gridDirection}
          alignItems="center"
          rowSpacing={2}
          sx={{
            ...gridContainerStyle,
            gridArea: 'left',
            '> *': {
              [theme.breakpoints.up('md')]: {
                paddingBottom: theme.spacing(3),
              },
            },
          }}
        >
          <Grid item md={1}>
            <Typography variant="subheader3">Icon Left</Typography>
          </Grid>
          <Grid
            item
            md={1}
            sx={{
              ...gridItemStyle_Last,
            }}
          >
            {' '}
            <Button variant={variantType} icon="left">
              BUTTON TEXT
            </Button>
          </Grid>
          <Grid
            item
            md={1}
            sx={{
              ...gridItemStyle_Last,
            }}
          >
            <Box className="hover">
              <Button variant={variantType} icon="left">
                BUTTON TEXT
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            md={1}
            sx={{
              ...gridItemStyle_Last,
            }}
          >
            <Box className="active">
              <Button variant={variantType} icon="left">
                BUTTON TEXT
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            md={1}
            sx={{
              ...gridItemStyle_Last,
            }}
          >
            <Box className="focus">
              <Button variant={variantType} icon="left">
                BUTTON TEXT
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            md={1}
            sx={{
              ...gridItemStyle_Last,
            }}
          >
            {variantType === 'PRIMARY' && (
              <Box>
                <Button variant={variantType} disabled icon="left">
                  BUTTON TEXT
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ButtonStatesExample;
