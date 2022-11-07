import { Box, Container, Grid, ThemeProvider, Toolbar, useTheme } from '@mui/material';
import { LogoBrand, Typography } from '@ui-kit-2022/components';
import { dark, light } from '@ui-kit-2022/theme';

import LongLabelExample from '../building-blocks/table/LongLabelExample';
import TableExample from '../building-blocks/table/TableExample';

const TableUsagePage = () => {
  const theme = useTheme();
  return (
    <>
      <Toolbar
        sx={{
          backgroundColor: {
            dark: theme.palette.grey['700'],
            light: theme.palette.grey['200'],
          }[theme.palette.mode],
        }}
      >
        <LogoBrand width={34} height={34} />
        <Typography variant="h4" ml={2}>
          Tables
        </Typography>
      </Toolbar>
      <Container disableGutters={true}>
        <Box p={5}>
          <Box>
            <Typography variant="h4" mb={3}>
              Purpose
            </Typography>
            <Typography variant="body2">
              These tables help the user read and understand the current status and
              important statistics about a security. <br />
              For ease of scanning, format these tables with consistent rhythm, alignment,
              and spacing.
            </Typography>
          </Box>
          <Box mt={7}>
            <Grid container columnSpacing={5} alignItems="center">
              <Grid item xs={4}>
                <Box>
                  <Typography variant="h4" mb={3}>
                    Cells
                  </Typography>
                  <Typography variant="body2" mb={3}>
                    A table cell contains a label and a value. Labels are left aligned.
                    Values are right-aligned, especially when a number value. Omit top
                    dividers of topmost cells, and the bottom divider the lowest cells.
                  </Typography>
                  <Typography variant="body2">
                    Each cell in a stack should have uniform width. Whether or not there
                    is a divider, at least 8 px of space should be given above and below
                    the content.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Grid container columnSpacing={2}>
                  <Grid item xs={6}>
                    <ThemeProvider theme={dark}>
                      <Box p={2} sx={{ backgroundColor: dark.palette.background.paper }}>
                        <TableExample />
                      </Box>
                    </ThemeProvider>
                  </Grid>

                  <Grid item xs={6}>
                    <ThemeProvider theme={light}>
                      <Box
                        p={2}
                        sx={{ backgroundColor: light.palette.background.paper }}
                        mr={7}
                      >
                        <TableExample />
                      </Box>
                    </ThemeProvider>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box mt={7}>
            <Grid container columnSpacing={5} alignItems="center">
              <Grid item xs={4}>
                <Box>
                  <Typography variant="h4" mb={3}>
                    Type
                  </Typography>
                  <Typography variant="body2" mb={3}>
                    The label has a subtle increase in opacity and font weight over the
                    value.
                  </Typography>
                  <Typography variant="body2">
                    Top-align the label and value for situations when either of them needs
                    a line break. Ensure a minimum of 16 pixels’ horizontal space between
                    the left-aligned label and the right-aligned value.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <ThemeProvider theme={dark}>
                  <Box sx={{ backgroundColor: dark.palette.background.paper }} p={3}>
                    <LongLabelExample
                      longLabel="Label (Subheader Small, Primary opacity)"
                      value="Value (Regular, Secondary Opacity)"
                    />
                  </Box>
                </ThemeProvider>
              </Grid>
              <Grid item xs={4}>
                <ThemeProvider theme={light}>
                  <Box sx={{ backgroundColor: light.palette.background.paper }} p={3}>
                    <LongLabelExample
                      longLabel="This is a long label name"
                      value="Value name"
                    />
                  </Box>
                </ThemeProvider>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default TableUsagePage;
