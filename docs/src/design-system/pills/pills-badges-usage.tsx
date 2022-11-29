import { Box, Container, Toolbar, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { action } from '@storybook/addon-actions';
import { Icon, LogoBrand, Pill } from '@ui-kit-2022/components';
import * as React from 'react';

const PillsBadgesUsage = () => {
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
          Pills and badges
        </Typography>
      </Toolbar>
      <Container disableGutters={true}>
        <Box p={5}>
          <Box>
            <Typography variant="h4" mt={1} mb={3}>
              Purpose
            </Typography>
            <Typography variant="body2">
              Pills represent complex entities or ideas within a small block of screen
              real estate. They help visualize:
              <br />-<b>Tags</b>: filters and parameters that have gone into populating a
              content feed or a list of search results. Used this way, they may be
              toggleable between on and off states.
              <br />-<b>Status</b>: Including important metadata about items in a list, or
              a callout to an item in a list or table that needs attention.
            </Typography>
          </Box>
          <Box mt={7}>
            <Typography variant="h4" mb={3}>
              Primary Pills
            </Typography>
            <Grid container rowSpacing={3} columnSpacing={3}>
              <Grid xs={12} md={4}>
                <Typography variant="body2">
                  The text within pills has consistent top and bottom padding of 4px. Use{' '}
                  <b>hollow pills</b> for flexibility on different backgrounds, or to show
                  an on/off state.
                </Typography>
              </Grid>
              <Grid xs={12} md={8}>
                <Box sx={{ mb: 2 }}>
                  <Pill label="Normal" sx={{ mr: 2 }} />
                  <Pill
                    label="Hover"
                    className="MuiButtonBase-root hover"
                    sx={{ mr: 2 }}
                  />
                  <Pill
                    label="Active"
                    className="MuiButtonBase-root active"
                    sx={{ mr: 2 }}
                  />
                  <Pill
                    label="Focus"
                    className="MuiButtonBase-root focus"
                    onClick={() => null}
                    sx={{ mr: 2 }}
                  />
                  <Pill label="Disabled" disabled={true} />
                </Box>
                <Box>
                  <Pill label="Normal" variant="outlined" sx={{ mr: 2 }} />
                  <Pill
                    label="Hover"
                    className="MuiButtonBase-root hover"
                    variant="outlined"
                    sx={{ mr: 2 }}
                  />
                  <Pill
                    label="Active"
                    className="MuiButtonBase-root active"
                    variant="outlined"
                    sx={{ mr: 2 }}
                  />
                  <Pill
                    label="Focus"
                    className="MuiButtonBase-root focus"
                    onClick={() => null}
                    variant="outlined"
                    sx={{ mr: 2 }}
                  />
                  <Pill label="Disabled" variant="outlined" disabled={true} />
                </Box>
              </Grid>
              <Grid xs={12} md={4}>
                <Typography variant="body2">
                  An icon at the right of the pill can add interactivity, like the ability
                  to delete it, or a set of dropdown menu options.
                </Typography>
              </Grid>
              <Grid xs={12} md={8}>
                <Pill
                  label="Closeable"
                  onClickIcon={action('delete')}
                  rightIcon={<Icon.Close />}
                  sx={{ mr: 2 }}
                />
                <Pill
                  label="Options"
                  onClickIcon={action('options')}
                  rightIcon={<Icon.ChevronDown />}
                />
              </Grid>
              <Grid xs={12} md={4}>
                <Typography variant="body2">
                  Ticker symbols are up to 5 characters, so <b>ticker pills</b> should
                  have the same width when in a group. A safe fixed width for every ticker
                  pill is 64 pixels.
                </Typography>
              </Grid>
              <Grid xs={12} md={8}>
                <Pill label="ABDE" variant="outlined" ticker={true} sx={{ mr: 2 }} />
                <Pill label="BCOR" variant="outlined" ticker={true} sx={{ mr: 2 }} />
                <Pill label="GOOGL" variant="outlined" ticker={true} sx={{ mr: 2 }} />
                <Pill label="AKAM" variant="outlined" ticker={true} sx={{ mr: 2 }} />
                <Pill label="EBAY" variant="outlined" ticker={true} />
              </Grid>
            </Grid>
          </Box>
          <Box mt={5}>
            <Typography variant="h4" mb={3}>
              Status Pills
            </Typography>
            <Grid container rowSpacing={3} columnSpacing={3}>
              <Grid xs={12} md={4}>
                <Typography variant="body2">
                  <b>Status pills</b> can show information about list items. Size these to
                  hug the text content horizontally. They will usually not be interactive.
                </Typography>
              </Grid>
              <Grid xs={12} md={8} spacing={4}>
                <Box mb={2}>
                  <Pill label="Success" color="success" sx={{ mr: 2 }} />
                  <Pill label="Warning" color="warning" sx={{ mr: 2 }} />
                  <Pill label="Buy" color="error" sx={{ mr: 2 }} />
                  <Pill label="Sell" color="info" />
                </Box>
                <Box>
                  <Pill
                    label="Success"
                    variant="outlined"
                    color="success"
                    sx={{ mr: 2 }}
                  />
                  <Pill
                    label="Warning"
                    variant="outlined"
                    color="warning"
                    sx={{ mr: 2 }}
                  />
                  <Pill label="Buy" variant="outlined" color="error" sx={{ mr: 2 }} />
                  <Pill label="Sell" variant="outlined" color="info" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PillsBadgesUsage;
