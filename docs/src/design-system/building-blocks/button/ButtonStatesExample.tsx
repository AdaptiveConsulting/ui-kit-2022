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
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[50]
      : theme.palette.background.paper;
  const gridDirection = useMediaQuery(theme.breakpoints.down('md')) ? 'column' : 'row';

  return (
    <>
      <Grid
        container
        spacing={{ sm: 0, md: 4 }}
        rowSpacing={{ xs: 6, sm: 2 }}
        sx={{ [theme.breakpoints.down('md')]: { maxWidth: '600px', margin: '0 auto' } }}
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
            <Grid item md={1}>
              <Typography variant="subheader3">Default</Typography>
            </Grid>
            <Grid item md={1}>
              <Typography variant="subheader3">Hover</Typography>
            </Grid>
            <Grid item md={1}>
              <Typography variant="subheader3">Active/Pressed</Typography>
            </Grid>
            <Grid item md={1}>
              <Typography variant="subheader3">Focused(ADA)</Typography>
            </Grid>
            <Grid item md={1}>
              <Typography variant="subheader3">Disabled</Typography>
            </Grid>
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
          rowSpacing={4}
          alignItems="center"
        >
          <Grid item md={1}>
            <Typography variant="subheader3">Default</Typography>
          </Grid>
          <Grid item md={1}>
            <Button variant={variantType}>BUTTON TEXT</Button>
          </Grid>
          <Grid item md={1}>
            <Box className="hover">
              <Button variant={variantType}>BUTTON TEXT</Button>
            </Box>
          </Grid>
          <Grid item md={1}>
            <Box className="active">
              <Button variant={variantType}>BUTTON TEXT</Button>
            </Box>
          </Grid>
          <Grid item md={1}>
            <Box className="focus">
              <Button variant={variantType}>BUTTON TEXT</Button>
            </Box>
          </Grid>
          <Grid item md={1}>
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
          rowSpacing={4}
          alignItems="center"
        >
          <Grid item md={1}>
            <Typography variant="subheader3">Icon Right</Typography>
          </Grid>
          <Grid item md={1}>
            <Button variant={variantType} icon="right">
              BUTTON TEXT
            </Button>
          </Grid>
          <Grid item md={1}>
            <Box className="hover">
              <Button variant={variantType} icon="right">
                BUTTON TEXT
              </Button>
            </Box>
          </Grid>
          <Grid item md={1}>
            <Box className="active">
              <Button variant={variantType} icon="right">
                BUTTON TEXT
              </Button>
            </Box>
          </Grid>
          <Grid item md={1}>
            <Box className="focus">
              <Button variant={variantType} icon="right">
                BUTTON TEXT
              </Button>
            </Box>
          </Grid>
          <Grid item md={1}>
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
          rowSpacing={4}
          alignItems="center"
        >
          <Grid item md={1}>
            <Typography variant="subheader3">Icon Left</Typography>
          </Grid>
          <Grid item md={1}>
            <Button variant={variantType} icon="left">
              BUTTON TEXT
            </Button>
          </Grid>
          <Grid item md={1}>
            <Box className="hover">
              <Button variant={variantType} icon="left">
                BUTTON TEXT
              </Button>
            </Box>
          </Grid>
          <Grid item md={1}>
            <Box className="active">
              <Button variant={variantType} icon="left">
                BUTTON TEXT
              </Button>
            </Box>
          </Grid>
          <Grid item md={1}>
            <Box className="focus">
              <Button variant={variantType} icon="left">
                BUTTON TEXT
              </Button>
            </Box>
          </Grid>
          <Grid item md={1}>
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
