import { Box, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Logo, TextSearch } from '@ui-kit-2022/components';

import TopBar from '../building-blocks/common/top-bar';

type Option = { label: string; type: string };

const placeholder = 'Enter a stock, symbol, or currency.';
const options = [
  { label: 'AAPL - Apple Inc.', type: 'stock' },
  { label: 'AMZN - Amazon Inc.', type: 'stock' },
  { label: 'HOV - Hovercraft Partners', type: 'stock' },
  { label: 'PRED - Predictive Technology Group Inc.' },
  { label: 'GBP - Great British Pound', type: 'currency' },
  { label: 'USD - US Dollar', type: 'currency' },
  { label: 'QOM - Shiba Predator', type: 'currency' },
] as Option[];

const groupBy = (opt: Option) => ({ stock: 'Stock', currency: 'FX' }[opt.type] as string);

export default function TickerSearchDesignPage() {
  return (
    <>
      <TopBar title="Search" />
      <Container>
        <Box my={5}>
          <Typography variant="h4" mb={3}>
            Purpose
          </Typography>
          <Typography variant="body2">
            This ticker search is the primary way users access information about a
            security or currency. It is the key to the rest of the experience.
          </Typography>
        </Box>
        <Grid container rowSpacing={5} columnSpacing={5} my={5}>
          <Grid sm={3} xs={12}>
            <Typography variant="h4" mb={3}>
              Field
            </Typography>
            <Typography variant="body2">
              The field is a minimal line, but big and bold in appearance. Upon arrival
              into the experience it is nearly the only thing on the page.
            </Typography>
          </Grid>
          <Grid sm={6} xs={12}>
            <TextSearch options={options} readOnly={true} placeholder={placeholder} />
          </Grid>
        </Grid>
        <Grid container rowSpacing={5} columnSpacing={5} my={5}>
          <Grid sm={3} xs={12}>
            <Typography variant="body2">
              The active state of the field uses the primary branded color family in its
              cursor and the input line itself.
            </Typography>
          </Grid>
          <Grid sm={6} xs={12}>
            <TextSearch options={options} inputValue="AMZN" open={false} />
          </Grid>
        </Grid>
        <Grid container rowSpacing={5} columnSpacing={5} my={5}>
          <Grid sm={3} xs={12}>
            <Typography variant="h4" mb={3}>
              Predictive Assistance
            </Typography>
            <Typography variant="body2">
              After the user types and pauses, bring up a series of predictions based on
              their input, to get them to their desired result in fewer keystrokes.
              <br />
              <br />
              Subtle differences in boldness help the user understand the difference
              between which parts of the result come directly from their input, and which
              were predicted. These lists should be navigable by mouse and keyboard.
              <br />
              <br />
              Here the concept is shown in mobile screens for dark and light mode.
            </Typography>
            <Typography variant="h4" mt={5} mb={3}>
              Dropdown hover state
            </Typography>
            <Typography variant="body2">
              Use the primary color family when a user is hovering over one of these menu
              options.
            </Typography>
          </Grid>
          <Grid sm={6} xs={12}>
            <Paper
              sx={{
                p: 4,
                height: 600,
                maxWidth: 390,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '30px',
              }}
            >
              <Logo variant="maximized" />
              <TextSearch
                options={options}
                inputValue="PRED"
                fullWidth={true}
                placeholder={placeholder}
                groupBy={groupBy}
                disablePortal={true}
                open={true}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
